// IIFE - immediately invoked function expression
// looks like this

(function() {
    console.log('hello');
})()

//! You cannot immediately call function declaration
function() {
    console.log('hello!');
}() //* Won't work, immediate invokation only works with function expressions

// Back in the day, to prevent framework messing (when two libraries have the same names of global variables) there was such practice
var script1 = function() {
    function a() {
        console.log(5);
    }
    return {
        a: a
    }
}

function a() {
    console.log('oh');
}

a(); // outputs 'oh'
script1.a(); // outputs 5
// script1 pollutes global namespace only once

