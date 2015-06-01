init();
function init() {
	var list = [];
	
	for (var i=0; i < 10; i++) {
	  	list.push({
	  		id: i,
	  		title: 'Item ' + i
	  	});
	};
	
  	$.wv.run({
		callback: 'loadList',
		params: list
	});
	
	$.index.open();
}

function wvListClick(e) {
  	Ti.API.error('wvListClick: ' + JSON.stringify( e ));
}