
let a = [1, 2, 3]
let b = [4, 5, ...a]

console.log(b)  // [ 4, 5, 1, 2, 3 ]

let c = [..."Hello"]
console.log(c);  // [ 'H', 'e', 'l', 'l', 'o' ]



function testFunc(func) {
    func("aaa", "bbb", "ccc")
}

// 函数作为参数穿给另一个函数
testFunc(function(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
})

console.log("-----------------------------------");

// 箭头函数
testFunc((a, b, c) => {
    console.log(a);
    console.log(b);
    console.log(c);
})


// 嵌套函数
// 内部函数可以读取外部函数定义的变量
// 注意内部函数的this指针
let o = {
    x: 100,
    f: function() {
        let y = 999;
    
        console.log(this.x);  // 100

        return function() {
            console.log(y)  // 999
            console.log(this.x);  // undefined
            console.log(this == globalThis);  // true  ，在严格模式下，内部函数的this指针会是undefined
        }
    }
}

let innerFunc = o.f()
innerFunc()

console.log("-----------------------------------");

// 将箭头函数作为内部函数，则箭头函数的this指针与外部函数是一样的
let o1 = {
    x: 100,
    f: function() {
        let y = 999;
        let self = this;
    
        return () => {
            console.log(y)  // 999
            console.log(this.x)  // 100
            console.log(this === o1)  // true
            console.log(self === this);  // true
        }
    }
}

o1.f()()