var win = Titanium.UI.currentWindow;

var labelRightPosition = 210;
var labelWidth = 70;
var dataLeftPosition = 75;

var truncText = function(text, length){
	var truncatedText = text;
	if (text.length > length){
		truncatedText = text.substring(0, length - 3) + '...';
	}
	return truncatedText;
};

var stripHTML = function(html) {
	return html.replace(/(<([^>]+)>)/ig,"");
};

var mainView = Titanium.UI.createView({
	borderRadius:10,
	backgroundColor:'white',
	width:280,
	height:175,
	top: 20
});

//======================================= Name ============================================
var nameLabel = Titanium.UI.createLabel({
	text: 'Name:',
	textAlign: 'right',
	color:'#778899',
	top: 10,
	right:labelRightPosition,
	width: labelWidth,
	height: 20
});

var nameValue = Titanium.UI.createLabel({
	text: win.speakerData.name,
	color: 'black', //this is needed for android
	top: 10,
	left: dataLeftPosition,
	ellipsize: true,
	wordWrap: false,
	width: 200,
	height: 20
});


var horizLine1 = Titanium.UI.createView({
	backgroundColor: 'silver',
	height: 1,
	top: 42
});

mainView.add(nameLabel);
mainView.add(nameValue);
mainView.add(horizLine1);
//======================================= Position ============================================

var positionLabel = Titanium.UI.createLabel({
	text: 'Position:',
	textAlign: 'right',
	color:'#778899',
	// font: {fontWeight: 'bold'},
	top: 55,
	right:labelRightPosition,
	width: labelWidth,
	height: 20
});

var positionValue = Titanium.UI.createLabel({
	text: win.speakerData.position,
	color: 'black', //this is needed for android
	top: 55,
	left: dataLeftPosition,
	width: 200,
	ellipsize: true,
	wordWrap: false,
	height: 20
});

var horizLine2 = Titanium.UI.createView({
	backgroundColor: 'silver',
	height: 1,
	top: 86
});

mainView.add(positionLabel);
mainView.add(positionValue);
mainView.add(horizLine2);

//======================================= Bio ============================================
var bioLabel = Titanium.UI.createLabel({
	text: 'Bio:',
	textAlign: 'right',
	color:'#778899',
	// font: {fontWeight: 'bold'},
	top: 88,
	right:labelRightPosition,
	width: labelWidth,
	height: 40
});

var bioContainer = Titanium.UI.createView({
	top: 88,
	left: dataLeftPosition,
	width: 200,
	height: 75
});

var bioDescr = Titanium.UI.createLabel({
	height: 'auto',
	top: 10,
	text:truncText(stripHTML(win.speakerData.bio), 60),
	color: 'black' //this is needed for android
});

bioContainer.add(bioDescr);

mainView.add(bioLabel);
mainView.add(bioContainer);

//======================================= Button ============================================
var button = Titanium.UI.createButton({
	title: 'Add to Contacts',
	height: 44,
	width: 200,
	top: 225
});

button.addEventListener('click',function(e)
{
	Titanium.API.info("You clicked the button");
	var speaker = win.speakerData;
	var person = {
		firstName: speaker.first_name,
		lastName: speaker.last_name,
		note: speaker.position
	};
	if (Titanium.Platform.osname == 'android'){
		var demoContact = require('com.chariotsolutions.demo.contact');
		demoContact.createContact(person);
	}else{
		Titanium.Contacts.createPerson(person);
	}
	var alertDialog = Titanium.UI.createAlertDialog({
	    title: 'Contact Saved',
	    message: speaker.name + ' has been added to your address book',
	    buttonNames: ['OK']
	});
	alertDialog.show();
});

win.add(button);

win.add(mainView);
