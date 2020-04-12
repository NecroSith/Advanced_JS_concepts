// Functions are first class citizens in JS
// it means that they can

// 1) be assigned to a variable
const one = function() {};

// 2) be passed to other functions as arguments
function two(fn) {
    fn();
}

two(function() {console.log('test')}); 

// 3) be returned as a value from other functions

function three() {
    return function four() {
        console.log('four');
    }
}

three(); // returns just function definition
three()(); // returns 4, second () is to call function in return