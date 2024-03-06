### Math.random()
用于生成一个介于 [0,1) 之间的伪随机数。
```javascript
// 生成一个随机数
let random = Math.random();
console.log(random); // 输出：0.1234567894321 (示例值，实际输出会不同)
// 生成一个 1 到 10 之间的随机整数
let randomInt = Math.floor(Math.random() * 10) + 1;
console.log(randomInt); // 输出：5 (示例值，实际输出会不同)
// 生成一个 50 到 100 之间的随机整数
let randomRange = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
console.log(randomRange); // 输出：77 (示例值，实际输出会不同)
```

