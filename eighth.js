
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


// class只是ES6新增的语法糖，本质还是构造函数和原型链
class Animal {

    constructor(name) {
        this.name = name;   
    }

    run() {
        console.log(`Animal ${this.name} is running`);
    }
    
    eat() {
        console.log(`Animal ${this.name} is eating`);
    }
}

let animal = new Animal("Rabbit");
animal.run();
animal.eat();
// 运行结果：
// Animal Rabbit is running
// Animal Rabbit is eating



// extends 和 super
class Dog extends Animal {
    
    constructor(name, color) {
        super(name);
        this.color = color;
    }

    run() {
        console.log(`${this.color} Dog ${this.name} is running`)
    }
}
let dog1 = new Dog("Joge", "Yellow");
let dog2 = new Dog("Wangcai", "Black");
dog1.run()
dog1.eat()
dog2.run()
dog2.eat()
// 运行结果：
// Yellow Dog Joge is running
// Animal Joge is eating
// Black Dog Wangcai is running
// Animal Wangcai is eating