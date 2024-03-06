#### keys 查看一个元素的所有属性
```javascript
var obj = {
  key1: 1,
  key2: 2
};

Object.keys(obj);
// ['key1', 'key2']
```
#### delete 删除元素中的属性
```javascript
var obj = { p: 1 };
Object.keys(obj) // ["p"]

delete obj.p // true
obj.p // undefined
Object.keys(obj) // []

delete的结果返回false的情况：属性存在且无法被删除；其余情况返回true
```
#### 对象的属性可以随时新增
```javascript
var obj = { p: 1 };

// 等价于

var obj = {};
obj.p = 1;
```
#### in运算符：属性是否存在
```javascript
var obj = { p: 1 };
'p' in obj // true
'toString' in obj // true

//hasOwnProperty判断是否为对象自身属性

var obj = {};
if ('toString' in obj) {
  console.log(obj.hasOwnProperty('toString')) // false
}

in 与 hasOwnProperty :
在JS中，由于几乎所有对象都是从 Object.prototype （Jscript中的顶级原型对象）继承的，而该对象定义了一些通用的方法，包括 'toString' ，
因此'toString' in obj 的结果为 true ，与 in 不同的是，hasOwnProperty判断是否为对象自身属性。

toString 将对象转换为字符型
```
#### for遍历
```javascript
● 它遍历的是对象所有可遍历（enumerable）的属性，会跳过不可遍历的属性。
● 它不仅遍历对象自身的属性，还遍历继承的属性。（只遍历继承中可遍历的属性）

// 遍历一个对象的全部属性
var obj = {a: 1, b: 2, c: 3};

for (var i in obj) {
  console.log('键名：', i);
  console.log('键值：', obj[i]);
}
// 键名： a
// 键值： 1
// 键名： b
// 键值： 2
// 键名： c
// 键值： 3
```
#### with语句
```
// 例一：修改一个对象中的多个属性
var obj = {
  p1: 1,
  p2: 2,
};
with (obj) {
  p1 = 4;
  p2 = 5;
}
// 等同于
obj.p1 = 4;
obj.p2 = 5;

// 例二：输出一个对象的多个属性
with (document.links[0]){
  console.log(href);
  console.log(title);
  console.log(style);
}
// 等同于
console.log(document.links[0].href);
console.log(document.links[0].title);
console.log(document.links[0].style);
```

