由于 module.exports 单词写起来比较复杂，为了简化向外共享成员的代码，Node 提供了 exports 对象。默认情况下，exports 和 module.exports 指向同一个对象。
在node.js中requre另一个文件时，得到的是 module.exports的对象
![image.png](https://cdn.nlark.com/yuque/0/2024/png/39218847/1706345257411-b847f262-5171-4f8c-9816-5dc12566e065.png#averageHue=%23718a5a&clientId=ub7bf2636-5969-4&from=paste&height=461&id=u201d62ac&originHeight=829&originWidth=2002&originalType=binary&ratio=1.7999999523162842&rotation=0&showTitle=false&size=237240&status=done&style=none&taskId=u0e1e80ca-f1fd-49b8-adec-7bb0bd5c50a&title=&width=1112.22225168605)
