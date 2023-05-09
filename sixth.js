
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



// 如果一个函数或方法前面有关键字new，那么它就是构造函数调用。构造函数构建对象的流程：
// 创建一个新的空对象，这个新的空对象会链接到该构造函数prototype所引用的原型对象
// 将构造函数的this指针指向这个新创建的对象
// 构造函数内部为这个新对象进行初始化
// 返回这个新对象。 构造函数并不需要return语句显示返回一个对象
function Point(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
}

let p = new Point(1, 2, 3);
console.log(p);  // Point { x: 1, y: 2, z: 3 }


// 给函数参数设置默认值
function saySomething(stmt, to="You") {
    console.log(`${stmt} ${to}`)
}

saySomething("Hello", "Lucy")
saySomething("Welcome", "Marco")
saySomething("Hello")  // Hello You