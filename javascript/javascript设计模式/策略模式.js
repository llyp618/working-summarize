// 所谓策略模式就是： 定义一些列算法，把它们一个个封装在一个对象里，根据其他函数传入的参数来确定调用指定算法执行。

//比如计算一个公司各个级别员工的年终奖：

	//定义每个级别员工的不同年终奖计算方式 存入strategies这个策略库中   S 表示优秀员工，A表示良好员工 ，B表示普通员工 salary 即各自的薪水；
	var strategies = {
		"S":function(salary){
			return salary*4;
		},
		"A":function(salary){
			return salary*3;
		},
		"B":function(salary){
			return salary*2;
		}
	};

	//定义 执行策略函数
	var calculateBonus = function (level,salary){
		return strategies[level](salary);
	};

	// 通过执行函数请求策略计算结果
	calculateBonus('S'，20000);
	calculateBonus('B'，10000);