
//get the data....it is local for the demo, but normally you would pull this from a server (using xhr)
var jsonFile = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory + "/speakers.json");
var speakerArray = JSON.parse(jsonFile.read().text);
Ti.API.info('we got ' + speakerArray.length + ' speakers');

//build custom rows to display name and position
var data = [];
for (var i = 0; i < speakerArray.length; i++){
	var tableRow = Titanium.UI.createTableViewRow();
	
	var speakerLabel = Titanium.UI.createLabel({
		text: speakerArray[i].name,
		font:{fontSize:16,fontWeight:'bold'},
		width: 'auto',
		textAlign: 'left',
		top: 2,
		left: 5,
		height: 20
	});
	
	var speakerPosition = Titanium.UI.createLabel({
		text: speakerArray[i].position,
		font:{fontSize:12,fontWeight:'normal'},
		// width: 'auto',
		ellipsize: true,
		wordWrap: false,
		textAlign: 'left',
		bottom: 0,
		left: 5,
		height: 20
	});
	
	tableRow.add(speakerLabel);
	tableRow.add(speakerPosition);
	tableRow.className = 'speakerRow'; //this is to improve rendering performance (row queueing)
	tableRow.hasChild = true;
	
	data.push(tableRow);
}

var tableView = Titanium.UI.createTableView({
		data: data
	});

// var title = Titanium.UI.createLabel({
// 	text: 'ETE Speakers',
// 	top: 0,
// 	height: 30,
// 	font:{fontSize:16,fontWeight:'bold'},
// 	color: 'black',
// 	backgroundColor: 'silver',
// 	width: 320,
// 	textAlign: 'center'
// });

//could put a listener on the row and store the speaker as an attribute of one of the views (i.e. labels)
tableView.addEventListener('click', function(e) {
	Titanium.API.info('Clicked on speaker: ' + speakerArray[e.index].name);
	var speaker = speakerArray[e.index];
	var detailsWin = Titanium.UI.createWindow({
		title: speaker.name,
		url: 'SpeakerDetails.js',
		speakerData: speaker,
		backgroundColor: 'silver',
		fullscreen: false
	});
	if (Titanium.Platform.osname == 'iphone') {
		Titanium.UI.currentWindow.navGroup.open(detailsWin, {animated: true});
	} else {
		detailsWin.open({animated: true});
	}
});

// if (Titanium.Platform.osname == 'android') {
// 	tableView.top = 30;
// 	Titanium.UI.currentWindow.add(title);
// }

Titanium.UI.currentWindow.add(tableView);