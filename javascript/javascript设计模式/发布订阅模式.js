// javascript中的发布订阅模型 通常是以事件模型来实现


/**
 * 发布订阅功能 event
 * @type {Object}
 * clientList:订阅事件存储位置
 * listen:订阅
 * trigger:发布
 */
var event = {
	clientList:[],
	listen:function(key,fn){
		if(!this.clientList[key]){
			this.clientList[key] = [];
		}
		this.clientList[key].push(fn);
	},
	trigger:function(){
		var key = Array.prototype.shift.call(arguments),
				fns = this.clientList[key];
		if(!fns || fns.length === 0){
			return false;
		}
		for(var i = 0,fn;fn = fns[i++];){
			fn.apply(this,arguments);
		}
	},
	// remove:function(key,fn){
	// 	var fns = this.clientList[key];
	// 	if(!fns){
	// 		return false;
	// 	}
	// 	if(!fn) {
	// 		fns && (fns.length = 0);
	// 	}else{
	// 		for(var l = fns.length - 1; l >=0; l--){
	// 			var _fn = fns[ l ];
	// 			if(_fn === fn){
	// 				fns.splice(l,1);
	// 			}
	// 		}
	// 	}
	// }
}

/**
 * 给某个对象安装订阅发布功能
 * @Lu
 * @param    {Object}                 obj 需要使用订阅发布功能的对象
 */
var installEvent = function(obj){
	for(var i in event){
		obj[i] = event[i];
	}
}

var salesOffices = {};

installEvent(salesOffices);

salesOffices.listen('squareMether88',fn1 = function(price){
	console.log('价格 = ' + price);
});
salesOffices.listen('squareMether88',fn2 = function(price){
	console.log('价格 = ' + price);
});
salesOffices.trigger('squareMether88',2000000);





