const fs = require("fs")

// 使用回调函数的异步处理方式
function readFile(fileName) {
    fs.readFile(fileName, "utf-8", (err, text) =>  {
        if(err) {
            console.log("Can not read file")
            console.log(err);
        } else {
            console.log(text)
        }
    })
}

readFile("../first.js")

