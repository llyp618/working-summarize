var a = 1;
test(function(){
	a = 3;
	console.log(a)
})
a = 4 ;
console.log(a);

function test(cb){
	a = 2;
	cb();
};