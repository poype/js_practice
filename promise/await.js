const fs = require("fs")

function readFile(fileName) {
    // 返回一个Promise对象
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, "utf-8", (err, text) => {
            if (err) {
                reject(err)
            } else {
                resolve(text)
            }
        })
    })
}

// await接受一个Promise对象，将其转换为一个返回值或抛出一个异常。在这里，await要嘛返回text值，要嘛抛出异常err
// await只能在async函数内部使用
// 使用await可以让你的异步代码变得像同步代码一样，这样更加容易理解代码逻辑
// 但await关键字并不会导致程序阻塞，本质上还是异步操作
async function test() {
    console.log("before read");
    let text = await readFile("./content.txt")
    console.log("after read");
    
    console.log(text)
}

// async方法的返回值是一个Promise对象。
// 也就是说，async方法是一个异步方法。在底层实现中，该方法会作为一个回调函数被异步调用
let ret = test();
console.log(ret instanceof Promise) // true     而且这个true会先于文件内容打印