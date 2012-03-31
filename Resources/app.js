var tabGroup = Ti.UI.createTabGroup();

var win1 = Ti.UI.createWindow({
	backgroundColor:'#fff'
});
var label1 = Ti.UI.createLabel({
	text:'Win1',
});
win1.add(label1);
win1.hideTabBar();

var tab1 = Ti.UI.createTab({
	title:'test',
	window:win1
});
tabGroup.addTab(tab1);

tabGroup.open();
