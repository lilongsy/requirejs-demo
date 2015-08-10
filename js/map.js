define(['jquery','backbone'], function($){
	
	widgetMap = Backbone.View.extend({
		
		initialize:function(options) {
			var obj = this;
			
			obj._initBDMapCallBack();
			obj._loadBDMap();
		},
		
		/**
		 * @description 异步载入百度地图
		 */
		 _loadBDMap: function() {
			 var obj = this;
			 var script = document.createElement("script");
			 script.type = "text/javascript";
			 script.src = "http://api.map.baidu.com/api?v=1.4&ak=您的密钥&callback=MapCallback";
			 document.body.appendChild(script);
		},
		
		/**
		 * @description 设置地图回调函数
		 */
		_initBDMapCallBack: function() {
			var obj = this;

			window.MapCallback = function() {
				// 借鉴单例模式
				obj.map = new BMap.Map("allmap");
				obj.point = new BMap.Point(116.404, 39.915);

				obj.map.centerAndZoom(obj.point, 15);
				obj.map.enableScrollWheelZoom();
			}
		}
	});
	return widgetMap;
});