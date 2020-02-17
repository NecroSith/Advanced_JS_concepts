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


//* Case 1

const a = function() {
    console.log('a', this); // this refers to global object, it's okay
    const b = function() {
        console.log('b', this); //! this refers to a lobal object as well because there is nothing at the left of the dot in b(). b() was called from the global object
        //! in full mode it loks like global.a(b()). To the left is window/global object
        const c = {
            hi() {
                console.log('hi', this); //this refers to c object
            }
        }
        c.hi();
    }
    b();
};

a();


//* Case 2

const obj = {
    name: 'Yan',
    hello() {
        console.log(this); // this here refers to obj, it's okay
        var go = function() {
            console.log('go', this); //! this here refers to a global object because in full mode obj.hello() happens and then go() is called from global object. Nothing else calls it
        }
        go();
    }
}

obj.hello();

//* Case 2 solutions
//* 1 - arrow functions
const obj = {
    name: 'Yan',
    hello() {
        console.log(this); // this here refers to obj, it's okay
        var go = () => {
            console.log('go', this);// this here refers to obj too!
        }
        go();
    }
}

obj.hello();

//* 2 - bind() method
const obj = {
    name: 'Yan',
    hello() {
        console.log(this); // this here refers to obj, it's okay
        var go = function() {
            console.log('go', this); // now this here refers to obj too
        }
        return go.bind(this); //* bind() explicitly tell js what this should be refered to
    }
}

obj.hello();
obj.hello()();


//* 3 - bind this to variable
const obj = {
    name: 'Yan',
    hello() {
        console.log(this); // this here refers to obj, it's okay
        const self = this;
        var go = function() {
            console.log('go', self); // this here refers to obj because self refers to it
        }
        go();
    }
}

obj.hello();