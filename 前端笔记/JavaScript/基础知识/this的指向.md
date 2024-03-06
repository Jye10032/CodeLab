## apply，call，bind三者的区别：

- 三者都可以改变函数的this对象指向。
- 三者第一个参数都是this要指向的对象，如果如果没有这个参数或参数为undefined或null，则默认指向全局window。
- 三者都可以传参，但是apply是数组，而call是参数列表，且apply和call是一次性传入参数，而bind可以分为多次传入。
- bind 是返回绑定this之后的函数，便于稍后调用；apply 、call 则是立即执行 。

## apply

apply接受两个参数，第一个参数是this的指向，第二个参数是函数接受的参数，以数组的形式传入，且当第一个参数为null、undefined的时候，默认指向window(在浏览器中)，使用apply方法改变this指向后原函数会立即执行，且此方法只是临时改变this指向一次。
**日常用法：改变this指向**
**示例：**
回调函数绑定this指向：

```
var name="martin";
var obj={
  name:"lucy",
  say:function(year,place){
    console.log(this.name+" is "+year+" born from "+place);
  }
};
var say=obj.say;
setTimeout(function(){
  say.apply(obj,["1996","China"])
} ,0); //lucy is 1996 born from China,this改变指向了obj
say("1996"，"China") //martin is 1996 born from China,this指向window，说明apply只是临时改变一次this指向
```

**小技巧：改变参数传入方式**
**示例：**
求数组中的最大值：

```
var arr=[1,10,5,8,3];
console.log(Math.max.apply(null, arr)); //10
```

其中Math.max函数的参数是以参数列表，如：Math.max(1,10,5,8,3)的形式传入的，因此我们没法直接把数组当做参数，但是apply方法可以将数组参数转换成列表参数传入，从而直接求数组的最大值。

call

call方法的第一个参数也是this的指向，后面传入的是一个参数列表（注意和apply传参的区别：**apply传入数组，call传入参数列表**）。当一个参数为null或undefined的时候，表示指向window（在浏览器中），和apply一样，call也只是临时改变一次this指向，并立即执行。
**示例：**

```
var arr=[1,10,5,8,3];
console.log(Math.max.call(null,arr[0],arr[1],arr[2],arr[3],arr[4])); //10
```

采纳以参数列表的形式传入，而apply以参数数组的形式传入。

bind

bind方法和call很相似，第一参数也是this的指向，后面传入的也是一个参数列表(但是这个参数列表可以分多次传入，call则必须一次性传入所有参数)，但是它改变this指向后不会立即执行，而是返回一个永久改变this指向的函数。（后续对bind的操作中，this的值不会改变，只会改变参数，当多次调用 bind 方法时，传入的新参数会被附加到之前已经绑定的参数列表之后。）
**示例：**

```
var arr=[1,10,5,8,12];
var max=Math.max.bind(null,arr[0],arr[1],arr[2],arr[3])
console.log(max(arr[4])); //12，分两次传参
```

可以看出，bind方法可以分多次传参，最后函数运行时会把所有参数连接起来一起放入函数运行。

**示例2：**

```
function exampleFunction() {
  console.log(this.name);
}

const obj1 = { name: 'Object 1' };
const obj2 = { name: 'Object 2' };

// 创建一个新的函数 boundFunction1，将其绑定到 obj1
const boundFunction1 = exampleFunction.bind(obj1);

// 创建另一个新的函数 boundFunction2，将其绑定到 obj2
const boundFunction2 = boundFunction1.bind(obj2);

boundFunction1(); // 输出 "Object 1"
boundFunction2(); // 输出 "Object 1"

```

在这个例子中，**boundFunction1** 被绑定到 **obj1**，而 **boundFunction2** 虽然调用了 **bind(obj2)**，但它仍然会输出 "Object 1"，因为 **boundFunction2** 是基于 **boundFunction1** 创建的，而 **boundFunction1** 的绑定没有被修改。
