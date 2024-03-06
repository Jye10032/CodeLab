ECMAScript 6.0 是 JavaScript 语⾔的下⼀代标准

新增的特性：
声明变量的方式 let const
变量解构赋值
字符串新增⽅法 includes() startsWith() endsWith() 等
数组新增⽅法 Array.from() Array.of() entries() keys() values() 等
对象简洁写法以及新增⽅法 Object.is() Object.assign() entries() keys() values()等
箭头函数、rest 参数、函数参数默认值等
新的数据结构： Set 和 Map
Proxy
Promise对象
async函数 await命令
Class类
Module 体系 模块的加载和输出⽅式
参考 ES6⼊⻔-阮⼀峰
## let和const
### 块级作用域
ES6 新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。

```javascript
{
  let a = 10;
  var b = 1;
}

a // ReferenceError: a is not defined.
b // 1


```
上面代码在代码块之中，分别用let和var声明了两个变量。然后在代码块之外调用这两个变量，结果let声明的变量报错，var声明的变量返回了正确的值。这表明，let声明的变量只在它所在的代码块有效。

```javascript
for (let i = 0; i < 10; i++) {
  // ...
}

console.log(i);
// ReferenceError: i is not defined


```
上面代码中，计数器i只在for循环体内有效，在循环体外引用就会报错。
下面的代码如果使用var，最后输出的是10。

```javascript
var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 10
```
上面代码中，变量i是var命令声明的，在全局范围内都有效，所以全局只有一个变量i。
在循环结束后调用函数，所有的函数都是 i 的最后的值。

```javascript
var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 6

```
上面代码中，变量i是let声明的，当前的i只在本轮循环有效，所以每一次循环的i其实都是一个新的变量，所以最后输出的是6。
JavaScript 引擎内部会记住上一轮循环的值，初始化本轮的变量i时，就在上一轮循环的基础上进行计算。
```javascript
var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = (function (i) {
        return function () {
            console.log(i);
        }
    })(i);
}
a[6](); // 6
```
这里输出的结果是 6，因为 JavaScript 的闭包特性，在这里每个 a[i] 都是一个闭包，它们可以访问到各自的执行上下文中的 i。

另外，for循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。

```
// 函数闭包
for (var i = 0; i < 5; i++) {
    (function (i) {
        setTimeout(function () {
            console.log(i);
        }, 1000);
    })(i)//0，1，2，3，4
}

// 不使用闭包
for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);//5，5，5，5，5
}
```
上面代码中，第一个例子运用了函数闭包，在每次设置定时器时，访问的值都是当前的值，因此输出 0，1，2，3，4，
如果直接使用定时器，由于 js 的执行顺序是先执行同步任务，再执行异步任务，因此定时器会在最后执行，由于 i 在循环后的值是 5，所以在同步代码执行完成后调用定时器的输出值都是 5.
```javascript
for (let i = 0; i < 3; i++) {
  let i = 'abc';
  console.log(i);
}
// abc
// abc
// abc
```
上面代码正确运行，输出了 3 次abc。这表明函数内部的变量i与循环变量i不在同一个作用域，有各自单独的作用域（同一个作用域不可使用 let 重复声明同一个变量）。




### 不存在变量提升

var命令会发生“变量提升”现象，即变量可以在声明之前使用，值为undefined。这种现象多多少少是有些奇怪的，按照一般的逻辑，变量应该在声明语句之后才可以使用。
为了纠正这种现象，let命令改变了语法行为，它所声明的变量一定要在声明后使用，否则报错。
```javascript
// var 的情况
console.log(foo); // 输出undefined
var foo = 2;

// let 的情况
console.log(bar); // 报错ReferenceError
let bar = 2;
```
上面代码中，变量foo用var命令声明，会发生变量提升，即脚本开始运行时，变量foo已经存在了，但是没有值，所以会输出undefined。变量bar用let命令声明，不会发生变量提升。这表示在声明它之前，变量bar是不存在的，这时如果用到它，就会抛出一个错误。

## const指令

### 变量提升
JavaScript 引擎的工作方式是，先解析代码，获取所有被声明的变量，然后再一行一行地运行。这造成的结果，就是所有的变量的声明语句，都会被提升到代码的头部，这就叫做变量提升（hoisting）。
```
console.log(a);
var a = 1;
```
上面代码首先使用console.log方法，在控制台（console）显示变量a的值。这时变量a还没有声明和赋值，所以这是一种错误的做法，但是实际上不会报错。因为存在变量提升，真正运行的是下面的代码。
```
var a;
console.log(a);
a = 1;
```
最后的结果是显示undefined，表示变量a已声明，但还未赋值。
