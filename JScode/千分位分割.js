function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}
console.log(numberWithCommas(12312124545));//'12,312,124,545'
console.log(numberWithCommas(123121245.45));//'123,121,245.45'