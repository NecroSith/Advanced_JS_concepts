//* Closure in JS is a combination of a function and its lexical environment
//* which allows to store REFERENCED values from inside the function after it has been invoked and removed from the call stack

function one() {
    const one = 'one';
    return function() {
        const two = 'two';
        const hi = 'hi'; //* This value won't be stored because it's not referenced from any child function
        return function() {
            const three = 'three';
            console.log(`${one} ${two} ${three}`);
            return `${one} ${two} ${three}`;
        }
    }
}

one()()(); // outputs 'one twoo three' as expected

const fn = one(); // here we invoke only first function so it executes and then get out of the call stack
fn()() //* outputs 'one two three' as well despite that one() already has een thrown away

// When one() executes, the value of the variable 'one' is stored in closure, although the function itself goes away from the stack
// the same thing happens with the second function
// thus, by the time the execution gets to the last function, we have values of 'one' and 'two' stored in closures and we have access to them
//* Functions enclose on themselves values of variables initialized inside them and arguments


// The same goes for the following example

function four() {
    const result = 'result';
    setTimeout(() => {
        console.log(result);
    }, 5000);
    // const result = 'result'; // We can even place variable init here and it won't be of any difference
    // Because setTimeout goes to web API and gets to callback queue
    // and in any case executes after the function is called
}

four();
//* When the function is invoked, setTimeout goes to Web API to get executed after four() is done and off the stack
//* so four() is executed and get thrown off but the referenced value of 'result' remains in memory heap
//* An when setTimeout is finally called it get 'result' value saved by the closure