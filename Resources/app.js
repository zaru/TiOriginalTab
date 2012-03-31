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

var win2 = Ti.UI.createWindow({
	backgroundColor:'#fff'
});
var label2 = Ti.UI.createLabel({
	text:'Win2',
});
win2.add(label2);
win2.hideTabBar();

var tab2 = Ti.UI.createTab({
	title:'test',
	window:win2
});
tabGroup.addTab(tab2);

tabGroup.open();
