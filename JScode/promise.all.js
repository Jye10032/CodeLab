function promiseAll(promises, maxnum) {
    const len = promises.length;
    const res = Array(len).fill(null);
    let count = 0;  // 计数器
    let index = 0;
    return new Promise((resolve, reject) => {
        function run() {
            let cur = index++;
            console.log(`正在执行第${cur}个任务`);
            promises[cur]().then((res) => {
                count++;
                res[cur] = res;
                console.log(`第${cur}个任务执行完毕`);
                if (index < len) {
                    run();
                }
                if (count === len) {
                    console.log("success");
                    resolve(res);
                }
            }).catch((err) => {
                console.log(err);
                reject(err);
            });
        }
        for (let i = 0; i < maxnum && i < len; i++) {
            // 先开启maxnum个任务
            run();
        }
    });
}

// test
const p1 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 10000);
});
const p2 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(2);
    }, 2000);
});
const p3 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(3);
    }, 3000);
});
const p4 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(4);
    }, 4000);
});
const p5 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(5);
    }, 500);
});
const promises = [p1, p2, p3, p4];

promiseAll(promises, 2);
