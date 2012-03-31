var tabGroup = Ti.UI.createTabGroup();

var win1 = Ti.UI.createWindow({
	backgroundColor:'#fff'
});
var label1 = Ti.UI.createLabel({
	text:'Win1',
});
win1.add(label1);
win1.add(makeTabBar());
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

function makeTabBar(){
	var view = Ti.UI.createView({
		width:320,
		height:44,
		bottom:0,
		backgroundColor:'#000',
	});
	
	var icon1 = Ti.UI.createButton({
		title:'Tab1',
		width:60,
		left:0,
	});
	
	var icon2 = Ti.UI.createButton({
		title:'Tab2',
		width:60,
		left:70,
	});
	
	view.add(icon1);
	view.add(icon2);
	
	return view;
}
