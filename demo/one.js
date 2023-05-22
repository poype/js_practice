
// 函数形参解构赋值
function test({x, y}) {
    console.log(x)
    console.log(y)
}

let o = {
    x: 1,
    y: 2
} 

test(o)