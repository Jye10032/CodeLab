## 函数声明的两种方式

```
//法1 function命令
function print(s) {
  console.log(s);
}
----------------------------------------
//法2 函数表达式
var print = function(s) {
  console.log(s);
};

----------------------------------------
/*
采用函数表达式声明函数时，function命令后面不带有函数名。
如果加上函数名，该函数名只在函数体内部有效，在函数体外部无效。
*/

var print = function x(){
  console.log(typeof x);
};

x
// ReferenceError: x is not defined

print()
// function
```

## 变量提升

```
f();

function f() {}

-------------------------------

f();
var f = function (){};
// TypeError: undefined is not a function

//等同于
var f;
f();
f = function () {};

--------------------------------
var f = function () {
  console.log('1');
}

function f() {
  console.log('2');
}

f() // 1

//function被提到了上面，所以先2后1
```

## lenth 返回参数个数

```
function f(a, b) {}
f.length // 2
```
