
// var变量的作用域是整个函数，let变量是块级作用域
// 下面演示的是var定义的变量，如果将var换成let会报错 “x is not defined”
function test_func(param) {

    console.log(x)  // undefined ，用var定义的变量，变量声明会提升到函数顶部，但变量的初始化仍在代码所在位置完成。

    if (param == 1) {
        var x = 100;
        console.log(x)  // 100
    }
    console.log(x)  // 100
}

test_func(1)


