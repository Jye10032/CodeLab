## type属性
在JavaScript中，type属性是用于定义脚本块内容类型的属性。在type属性中定义的内容类型会影响脚本的解析方式和行为。
```
<script type="text/javascript">
<script type="application/javascript">
<script type="module">
<script type="text/coffeescript">
```
### 1. 指定脚本块内容的类型
type属性的首要作用是指定脚本块内容的类型。如果type属性值为"text/javascript"，则表示该脚本块是一个JavaScript代码块。当浏览器解析HTML文档时，遇到<script>标签时，会根据type属性的取值来解析脚本。例如：
```javascript
<script type="text/javascript">
  alert('Hello world!');
</script>
```
type="text/javascript"是<script>标签的默认值。这个值用于指定脚本块是JavaScript代码。
浏览器会把这段脚本当做JavaScript代码来解析执行，并在页面上弹出一个对话框，显示"Hello world!"。
type="application/javascript"用于指定脚本块是JavaScript代码。HTML5规范建议使用这个值，而不是"text/javascript"。例如：
```javascript
<script type="application/javascript">
  alert('Hello world!');
</script>
```
### 2. 区分不同脚本语言
type属性还可以用于区分不同的脚本语言。由于JavaScript不是HTML的唯一脚本语言，type属性可以指定其他脚本语言的代码块。例如：
**VBScript**
```javascript
<script type="text/vbscript">
  MsgBox "Hello world!"
  </script>
```
这段代码使用了VBScript，而不是JavaScript。浏览器会根据type属性的取值来解析脚本块中的代码。
**coffeescript**
type="text/coffeescript"用于指定脚本块是CoffeeScript代码，这是一种基于JavaScript的编程语言。例如：
```
<script type="text/coffeescript">
    alert 'Hello world!'
</script>
```
### 3. 禁用脚本
type属性的另一个重要作用是可以用来禁用脚本。如果设置type属性值为"text/javascript"以外的其他值，浏览器不会解析这个脚本块中的代码。例如：
```
<script type="text/plain">
    alert('Hello world!');
</script>
```
在这个例子中，浏览器不会解析alert()函数，因为type属性值设置为"text/plain"。
### 4.指定脚本是ES6模块
type="module"用于指定脚本块是一个ES6模块，这意味着该模块中的代码不会影响全局作用域。例如：
```
<script type="module">
    const greeting = 'Hello world!';
    export default greeting;
</script>
```
