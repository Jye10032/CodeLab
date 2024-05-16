//测试代码
//假设当前URL为https://www.example.com?name=bing&age=10
function getQueryVariable(url, variable) {
    var query = url.split('?')[1];
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (pair[0] == variable) {

            return pair[1];
        }
    }
    console.log('Query variable %s not found', variable);
}

console.log(getQueryVariable('https://www.example.com?name=bing&age=10', 'name')); //bing
