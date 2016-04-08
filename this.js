
//一---输出niubi
(1[0] + {})//undefined[object Object]
( 1[0] + {} )[1]// n
( 1[0] + {} )[5]// i
( 1[0] + {} )[0]// u
( 1[0] + {} )[11]// b
( 1[0] + {} )[5]// i
var niubi = (1[0] + {})[1] + (1[0] + {})[5] + (1[0] + {})[0] + (1[0] + {})[11] + (1[0] + {})[5];
console.log(niubi)//niubi


//二---将二维数组转化为一维数组

var arr1 = [[2,4,6],[1,3,5]];
var arr2 = [[1,2],[3,4],[5,6],[7,8]];
var arr3 = [[1,2,3],9,9,9]
var result = [];
function change (arr,result) {
	for (var i = 0; i < arr.length; i++) {
		var array = arr[i];
		if (array.join) {
			change(array, result);
		}else {
			result.push(array);
		}
	}
}
change(arr1,result)
console.log(result)//[2, 4, 6, 1, 3, 5]
change(arr2,result)
console.log(result)//[1, 2, 3, 4, 5, 6, 7, 8]
change(arr3,result)
console.log(result)//[1, 2, 3, 9, 9, 9]




//三---实现一个sum函数对传入参数进行求和
var arr1 = [1,2,3];
function add () {
	var sum = 0;
	for (var i = 0; i < arguments.length; i++) {
		var a = arguments[i].join("+");
		b = eval(a);
		sum += b;
	}
	return sum;
}
add(arr1)//6


//四----foreach函数
function person (element,index,array) {
	console.log( 'name/age:' + element.join('/') );
}
var hh = [["zhou" , 10],["wu" , 12],["zheng" , 13]];
hh.forEach(person);
//name/age:zhou/10
//name/age:wu/12
//name/age:zheng/13


//五---拷贝
var arr = [4,5,6];
var objhhh = {
	name: 'hahaha',
	age: 1
};
function deepCopy (a) {
	if (a instanceof Array) {
		deep = a.slice(0);
		
	}else if (a instanceof Object) {
		deep = {};
	}
	for (var key in a) {
		if (typeof a[key !='Object']) {
			deep[key] = a[key]; 
		} else {
			deep[key] = deepCopy(a[key])
		}
	}
	return deep;
}