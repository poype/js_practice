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



// bind方法会返回一个新的函数，这个新的函数会与一个对象绑定，即这个新的函数的this指针指向某个对象
function f3(param1, param2) {
    console.log(this == globalThis);
    console.log(this);

    console.log(this.message);

    console.log(`${param1}  ${param2}`)
}
// g函数的this指针会指向对象o
g = f3.bind(o)
/* g函数执行的输出结果
false
{ message: 'Hello World' }
Hello World
one_param  two_param
 */
g("one_param", "two_param")

/* f3函数本身还是全局函数，并没有与对象o绑定
true
<ref *1> Object [global] {
    ...
}
undefined
11111  22222
 */
f3("11111", "22222")