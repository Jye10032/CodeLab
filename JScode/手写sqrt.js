function sqrt(x) {
    if (x === 0) {
        return 0;
    }
    if (x === 1) {
        return 1;
    }
    let left = 1;
    let right = x;
    while (right - left >= 0.000001) {
        let mid = (left + right) / 2;

        if (Math.abs(mid * mid - x) < 0.0001) {
            return mid;
        }
        else if (mid * mid < x) {
            left = mid;//避免了直接加减0.01导致结果不准确的问题
        }
        else {
            right = mid;
        }
    }
    return (left + right) / 2;
}
console.log(sqrt(2.25));