wait = (time) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log('await for', time);
            resolve();
        }, time)
    })
}
async function async1() {
    console.log('async1 start');
    await wait(2000);
    console.log('async1 end');
};

async1();