const fs = require("fs")

// 使用使用Promise对象代替回调函数
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

// 第一种使用promise的方式，then方法接受两个方法参数
// 第一个方法参数用于处理正常异步结果，第二个方法参数用于处理异常异步结果
// 很少这样使用Promise对象
readFile("./callback1.js").then(content => {
    console.log(content);
}, err => {
    console.log("can not read file!!!");
    console.log(err);
})


// 第二种使用promise的方式，使用catch方法接收处理异常结果的函数
readFile("./callback.js")
    .then(content => {
        console.log(content)
        // throw new Error("handle normal result error")
    })
    .catch(err => {
        // catch方法不止在读取文件失败时会被调用，在then方法处理失败时，catch方法也会被调用
        console.log("can not read file!!!");
        console.log(err);
    })

// 本质上Promise和回调是一样的，都是处理异步的结果，但使用Promise可以避免“缩进地狱”

