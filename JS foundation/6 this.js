//* this - is the object that the function is a property of
//* its refering to what is on the left from the dot
//* e.g. this in a() below refers to window or global object because the execution context is global.a() or window.a()
//* it
//* 1) gives methods access to their object
//* 2) lets us execute same coe for multiple objects

function a() {
    console.log(this);
}

a(); //  this here refers to a global object instead of function
// because function 'a' is a property of global object
//* use 'use strict' to avoid such behaviour

const obj = {
    name: 'Yan',
    hello() {
        console.log(this.name + ' is here!'); // here this is an object that the function hello is a property of, i.e. obj
    }
}

obj.hello();


//* using this to multiple objects 

function sayHello() {
    console.log('Hello ' + this.name + '!');
}

const name = 'Yan';
const obj1 = {
    name: 'Ivan',
    sayHello: sayHello
}
const obj2 = {
    name: 'Alex',
    sayHello: sayHello
}

sayHello(); //! this.name undefined
obj1.sayHello(); // ouputs Hello Ivan!
obj2.sayHello(); // outputs Hello Alex!