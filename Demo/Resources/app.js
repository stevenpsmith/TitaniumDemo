// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

//
// create base UI tab and root window
//
var parentWin = Titanium.UI.createWindow();

var listWin = Titanium.UI.createWindow({
	url: 'views/SpeakerList.js',
	title: 'ETE Speakers',
	fullscreen:false,
	exitOnClose: true, //this is for android...prevents the back button from showing the splash screen
	top: 10
});

var nav = Titanium.UI.iPhone.createNavigationGroup({
	window: listWin
});

listWin.navGroup = nav;

if (Titanium.Platform.osname == 'iphone'){
	parentWin.add(nav);
	parentWin.open();
} else if (Titanium.Platform.osname == 'android') {
	listWin.open();
}

