//版本号
//v1>v2 1
//v1<v2 -1
//v1=v2 0
// 输出样例：compare('1.0.0', '1.0.1')返回 - 1，因为前者版本比后者低，具体代码实现：
function compareVersion(v1, v2) {
    v1 = v1.split('.')
    v2 = v2.split('.')
    const len = Math.max(v1.length, v2.length)
    // 调整两个版本号位数相同 
    while (v1.length < len) {
        v1.push('0')
    }
    while (v2.length < len) {
        v2.push('0')
    }
    // 循环判断每位数的大小 
    for (let i = 0; i < len; i++) {
        const num1 = parseInt(v1[i])
        const num2 = parseInt(v2[i])
        if (num1 > num2) {
            return 1
        } else if (num1 < num2) {
            return -1
        }
        else {
            continue
        }
    }
    return 0;
}

console.log(compareVersion('1.0.0', '1.0.1')) // -1
console.log(compareVersion('1.0.0', '1.0.0')) // 0
console.log(compareVersion('1.0.1', '1.0.0')) // 1

console.log(compareVersion('1.0.0', '1.10.0')) // -1