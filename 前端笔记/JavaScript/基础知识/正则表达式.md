## 匹配邮箱地址
```javascript
let email = "example@example.com";
let regex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
let isEmailValid = regex.test(email);
console.log(isEmailValid); // 输出：true 或 false
```
这个正则表达式的含义如下：  

- \b：匹配单词边界。 [A-Za-z0-9._%+-]+：匹配一个或多个字母、数字、点、下划线、百分号、加号或减号。
-  @：匹配 "@" 符号。 [A-Za-z0-9.-]+：匹配一个或多个字母、数字、点或减号。
-  \.：匹配 "." 符号。 [A-Z|a-z]{2,}：匹配两个或更多的字母。 
- \b：匹配单词边界。 
