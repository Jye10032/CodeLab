DOM 是 JavaScript 操作网页的接口，全称为“文档对象模型”（Document Object Model）。它的作用是将文档解析成一个由节点和对象（包括元素，属性，文本等）组成的树状结构，通过这个树状结构，可以更方便的访问、修改文档的内容和结构	。
## Dom事件类
### DOM事件的级别
| DOM事件类 | 事件级别 |
| --- | --- |
| DOM0 | element.onclick=function(){}![image.png](https://cdn.nlark.com/yuque/0/2023/png/39218847/1699494756340-923882b3-54e6-4d75-a78c-00bc4f0962fb.png#averageHue=%23efeeee&clientId=u9b19cbe3-6bb7-4&from=paste&height=158&id=j9x5z&originHeight=285&originWidth=1468&originalType=binary&ratio=1.7999999523162842&rotation=0&showTitle=false&size=90285&status=done&style=none&taskId=uc2e54f0e-3a15-446e-a8dc-d1df1974141&title=&width=815.5555771604002) |
| DOM2 | element.addEventListener('click', function(){} ，false) |
| DOM3 | element.addEventListener('keyup', function(){} , false) |


- 当第三个参数为 **false** 时，表示事件处理程序在冒泡阶段执行。冒泡是指事件从最具体的元素开始，然后逐级向上传播到最不具体的元素。这是事件处理程序的默认行为，如果不指定参数，默认为 **false**。
- 当第三个参数为 **true** 时，表示事件处理程序在捕获阶段执行。捕获是指事件从最不具体的元素开始，然后逐级向下传播到最具体的元素。在捕获阶段执行事件处理程序通常用得较少。

### DOM事件模型
分为捕获（从上到下）和冒泡（从⽬标元素往上）
### DOM事件流

![image.png](https://cdn.nlark.com/yuque/0/2023/png/39218847/1699494863605-e3e7bc58-0744-4637-8c7f-d7ad77133f3b.png#averageHue=%23fefefe&clientId=u9b19cbe3-6bb7-4&from=paste&height=479&id=njoif&originHeight=862&originWidth=888&originalType=binary&ratio=1.7999999523162842&rotation=0&showTitle=false&size=236635&status=done&style=none&taskId=u5a0fc2ca-f78c-4b71-b798-b894789186e&title=&width=493.3333464022039)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/39218847/1699494870290-1e73baac-70d0-4606-9646-9333eb8b25b7.png#averageHue=%23edecec&clientId=u9b19cbe3-6bb7-4&from=paste&height=137&id=rE12b&originHeight=246&originWidth=1368&originalType=binary&ratio=1.7999999523162842&rotation=0&showTitle=false&size=77541&status=done&style=none&taskId=u63ef009d-7452-4110-b056-19394cd3fbf&title=&width=760.000020133125)
### 描述DOM事件捕获的具体流程
## ![image.png](https://cdn.nlark.com/yuque/0/2023/png/39218847/1699494911435-88643475-05cf-474a-9bc6-19331f1c83e8.png#averageHue=%23fefefe&clientId=u9b19cbe3-6bb7-4&from=paste&height=538&id=Z1bYF&originHeight=968&originWidth=1643&originalType=binary&ratio=1.7999999523162842&rotation=0&showTitle=false&size=378351&status=done&style=none&taskId=udae50e6c-0ce7-40ff-b0b8-b10cc95e870&title=&width=912.7778019581318)
### Event对象的常见应用
![image.png](https://cdn.nlark.com/yuque/0/2023/png/39218847/1699494971146-69f77658-6473-4901-af10-2937fe2ed90b.png#averageHue=%23ece7e6&clientId=u9b19cbe3-6bb7-4&from=paste&height=186&id=GTNOE&originHeight=334&originWidth=1779&originalType=binary&ratio=1.7999999523162842&rotation=0&showTitle=false&size=166299&status=done&style=none&taskId=uab33674e-fe50-4a3f-879d-2a9deefef7c&title=&width=988.3333595152261)
## 虚拟DOM
虚拟 DOM（Virtual DOM）是一种用于优化前端性能的编程概念，通常与框架如 React 一起使用。它是在内存中对真实 DOM 的一种抽象表示。

在传统的前端开发中，当数据发生变化时，直接操作真实 DOM 可能会引起昂贵的重新渲染和重排操作，导致性能下降。为了解决这个问题，引入了虚拟 DOM 的概念。

虚拟 DOM 的基本思想是，使用一个轻量级的 JavaScript 对象表示真实 DOM 树的结构。当数据发生变化时，首先在虚拟 DOM 中进行操作，然后通过比较虚拟 DOM 和之前的虚拟 DOM 的差异，计算出最小的变化，并将这些变化批量应用到真实 DOM 上。这样可以极大地减少实际的 DOM 操作，从而提高性能。

虚拟 DOM 的基本工作流如下：

1.  **初始化：** 初始渲染时，将真实 DOM 结构映射为虚拟 DOM。 
2.  **状态变化：** 当应用状态发生变化时，生成新的虚拟 DOM。 
3.  **虚拟 DOM 比较：** 将新生成的虚拟 DOM 与先前的虚拟 DOM 进行比较，找出两者的差异。 
4.  **差异应用：** 仅将差异部分应用到真实 DOM 上，而非重新渲染整个 DOM。 

虽然虚拟 DOM 增加了一些开销，但通过批量处理变化，它通常比直接操作真实 DOM 更高效，尤其在大规模和复杂的应用中。React 是一个使用虚拟 DOM 的典型例子，其 diff 算法可以高效地找出变化，最小化对真实 DOM 的操作。其他框架，如 Vue.js，也采用了类似的机制。
## Mutation Observer
当DOM发生改变时会触发Mutation事件，当所有DOM操作结束后，Mutation才会触发(异步触发）
