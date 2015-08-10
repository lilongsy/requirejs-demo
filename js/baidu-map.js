require.config({
	paths:{
		jquery:"jquery-1.9.1"
	}
});

require(['map'], function(widgetMap){
	new widgetMap({
		el: "#xxx"
	});
});