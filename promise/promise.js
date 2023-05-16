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
readFile("./callback2.js")
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


// Promise链
// then方法的返回值也是Promise类型的对象
// 在每个then方法返回的Promise对象中，包装了then方法参数函数return的值
readFile("./content1.txt")
    .then(content => {
        let length = content.length;
        return content.substring(length - 10); // content的最后10个字符将被包装到Promise对象中传给下一个then方法
    })
    .then(last10 => {
        console.log("-----------------start------------------");
        console.log(last10);
        console.log("-----------------end--------------------");
    })
    .catch(err => {   // 读取文件失败，或任何一个then方法报错，都会调用catch
        console.log("handle content of file error");
        console.log(err)
    })


    
// handleContent方法返回的也是一个Promise对象
function handleContent(content) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(content)
        }, 2000)
    })
}

readFile("./content.txt")
    .then(content => {
        return handleContent(content)     // 返回Promise对象，那么这个Promise对象就作为该then方法的返回值
    })
    .then(content => {
        let length = content.length;
        return content.substring(length - 10);  // 返回字符串对象，把字符串对象包装进Promise对象，再作为then方法的返回值。这个Promise对象自动就是Resolved状态，所以后续的then方法能马上执行。
    })
    .then(last10 => {
        console.log("-----------------start 111------------------");
        console.log(last10);
        console.log("-----------------end 111--------------------");
    })
    .catch(err => {
        console.log("handle content of file error");
        console.log(err)
    })

// 一个Promise对象就代表一个异步操作，它有三种状态：Pending、Resolved(也叫fulfilled)、Rejected
// 当Promise对象的状态由Pending切换到Resolved或Rejected状态时，对应的then或catch方法就会被调用

// 当有多个then方法级联时，如果前一个then方法的返回值是普通value，则这个返回值会作为下一个then方法入参函数的入参
// 如果前一个then方法的返回值又是一个Promise对象，则后面的then方法会等待这个Promise对象状态变为Resolved后再执行。

// 本质上，then方法永远返回Promise对象，如果返回的是普通value，则将这个普通value包装到Promise对象中再由then方法返回(此时Promise对象自动切换到Resolved状态，所以不需要等待)。
// 如果返回的就是Promise对象，则这个Promise对象就会直接作为then方法的返回值。