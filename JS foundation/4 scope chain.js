// Scope chain is a link between data in a function and in its parent scope

const norm = 16;

function doSmth() {
    console.log(norm); // it won't find such variable in the function scope so js will go up the scope chain to find it in the parent scope
}

function sayMyName() {
    const a = 'a';
    return function getMyName() {
        const b = 'b';
        console.log(c); // Won't work because js compiler don't look for variables down the scope chain. Only up
        
        return function printMyName() {
            const c = 'c';
            console.log(a); // outputs "a" because it has access to variable "a" up the scope chain
            
            console.log('We got this!');
        };
    };
}

sayMyName()()();


//* However we can accidentally make a leakage to global scope

function doStuff() {
    height = 50;
    console.log(height); //! outputs 50 because js compiler created var memory space for "height" in the GLOBAL scope
    //* To avoid this always use let or const or 'use strict' at the top of the page
}

doStuff();


// Another interesting stuff

var func = function someFunc() {
    console.log('hey');
    someFunc(); //! it outputs 'hey' but as the function calls itself it goes into infinite loop. Ouch.
}

func() // outputs 'hey'
someFunc() //! We get reference error because somefunc is located inside func scope
//! and it can be called only from there (I know it's weird)

