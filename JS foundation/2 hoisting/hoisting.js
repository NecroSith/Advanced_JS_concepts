// hoisting is a behaviour of allocating memory for every function and variable in the code before running it
// Before execution js engine passes through all the code and allocates memory for all variables and function

console.log(variable); //* outputs "undefined" because the memory for this variable was allocated before running the code 
//* but before initializing this variable is undefined. It's called PARTIALLY HOISTED

console.log(newVar); //* throws an error because "let" and "const" keywords make variables non-hoistable

const newVar = 50;
var variable = 100; 


hello(); // outputs "hi" because the function is hoisted
hello2(); // "hello2 is not defined" because we isolated it and made it non-hoistable via ()
hello3(); // "hello3 is not a function" because it has memory allocated to it before runtime but it's not a function yet but "undefined". And we can't call undefined

// Function declaration
function hello() {
    console.log('hi');
}

(function hello2() {
    console.log('hi again!');
})

// Function expression
var hello3 = function() {
    console.log('hi another time!');
}

