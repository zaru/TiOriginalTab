var tabGroup = Ti.UI.createTabGroup();

var win = Ti.UI.createWindow({
	backgroundColor:'#fff'
});
var label = Ti.UI.createLabel({
	text:'Win1',
});
win.add(label);
win.hideTabBar();

var tab = Ti.UI.createTab({
	title:'test',
	window:win
});
tabGroup.addTab(tab);

tabGroup.open();
