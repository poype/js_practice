
let o1 = {
    message: "Hello World",
    say: function() {
        console.log(this.message);
    }
}
o1.say()

// ES6之后可以像下面这样定义方法
let o2 = {
    message: "Hello JS",
    say() {
        console.log(this.message)
    }
}
o2.say()