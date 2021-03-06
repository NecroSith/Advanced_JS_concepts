// Each time JS engine sees () after function name
// it creates execution context

//* Initially there is a glocal execution context inside all the others take place
//* global execution context gives us "global" object and "this" reference

function sayName() {
    getName(); // Execution context number 2
}

function getName() {
    function a() {
        // code
    }
    sendRequest(); // Execution context number 3
}

function sendRequest() {
    console.log('Sending req'); // Here function is executed and execution contexts are popped off from call stack
}

sayName(); // Before this we had global execution context only buy here in the call stack first execution context is added

//* After all lines of code is done global EC is popped off from the call stack as well

//* Lexical scope
// Lexical scope determines available variables inside certain execution context
// Lexical environment is basically where we write something
//* All of the functions above have global lexical environment
//! except function a() which has getName lexical environment