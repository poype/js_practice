// 对于一个普通函数，它的this指针是指向全局对象的
function f1(message1, message2) {
    console.log(this == globalThis)  // true
}
f1("one", "two")


// call 和 apply的作用是让一个函数以某个对象方法的形式进行调用
// 即让那个函数的this指针指向某个对象
let o = {
    message: "Hello World"
}

function f2(message1, message2) {
    console.log(this == globalThis);

    console.log(this.message);

    console.log(`${message1}  ${message2}`)
}
// 下面通过apply 或 call让函数f2的this指针指向对象o
// apply 和 call 的作用是相同的，只是传递参数列表的方式有点区别

/*
输出结果：
false
Hello World
one-msg  two-msg 
*/
f2.call(o, "one-msg", "two-msg")
/*
输出结果与上面相同
false
Hello World
one-msg  two-msg
 */
f2.apply(o, ["one-msg", "two-msg"])