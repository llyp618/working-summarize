// 代理模式 就是 某个函数(主体)A 在接受其他函数(客户)C调用请求时，在中间插入一个控制代理函数 B，以过滤一些请求，这样可以防止错误的产生，
// 同时可以让主体函数 A 单一职责，（可以省去if判断，交给B来处理），后期维护代理函数B就可以了；同时代理函数也可以实现很多功能，如缓存存储等。

// 例子：

// 假设复杂的计算函数 只负责计算：

var plus = function (ary){
	var result = 0;
	for (var i = 0; i < ary.length; i++){
		result += ary[i];
	}
	return result;
};

// 代理函数 用于判断传入参数是否合理

var proxyPlus = function(ary){
	for(var i = 0; i < ary.length; i++){
		if(typeof ary[i] != 'number') {
			console.log('need number!');
			return false;
		}
	}
	return plus(ary);
}

proxyPlus([1,2,3,4]);

//这是很简单的代理，实际上这里的代理proxyPlus可以做很多事情，不单单校验参数，

// 代理模式就是将复杂逻辑交给代理处理，保证主体函数的简单，减少主体函数内部的逻辑判断和流程控制，

//代理最主要的目的就是为了保证主体函数的   “职责单一性”  ，实际上不通过代理，也可以直接调用主体函数。