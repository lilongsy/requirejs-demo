require.config({
	baseUrl: "js/",
	paths:{
		"util": "helper/util"
	},
	waitSeconds: 15,
	map:{
		'*': {
			"css":"css"
		}
	},
	shim:{
		'util':['css!../css/1.css']
	}
});

require(["util"],function(){
	// todo
});