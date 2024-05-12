let arr = [];

// ES6中增加的数组方法
Array.isArray()

console.log(Array.isArray(arr));
// 使用constructor判断
//首先获取参数 arr 的构造函数，然后将构造函数转换为字符串，最后检查这个字符串中是否包含 "Array"。如果包含，那么 indexOf("Array") 的结果就会大于 - 1，函数就会返回 true；如果不包含，那么 indexOf("Array") 的结果就会等于 - 1，函数就会返回 false。
function is_Array(arr) {
    return arr.constructor.toString().indexOf("Array") > -1;
}

console.log(is_Array(arr));

//通过比较参数 arr 的构造函数是否等于 Array 来实现。如果 arr 的构造函数是 Array，那么 arr.constructor === Array 的结果就是 true，函数就会返回 true；如果 arr 的构造函数不是 Array，那么 arr.constructor === Array 的结果就是 false，函数就会返回 false。
function is_Array2(arr) {
    return arr.constructor === Array;
}

console.log(is_Array2(arr));
//通过使用 instanceof 运算符来检查 arr 是否是 Array 的实例来实现。如果 arr 是 Array 的实例，那么 arr instanceof Array 的结果就是 true，函数就会返回 true；如果 arr 不是 Array 的实例，那么 arr instanceof Array 的结果就是 false，函数就会返回 false。
// 用instanceof判断
function is_Array3(arr) {
    return arr instanceof Array;
}

console.log(is_Array(arr));