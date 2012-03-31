var tabGroup = Ti.UI.createTabGroup();

var win = Ti.UI.createWindow();
var tab = Ti.UI.createTab({
	title:'test',
	window:win
});
tabGroup.addTab(tab);

tabGroup.open();
