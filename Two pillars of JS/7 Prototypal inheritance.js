// The second pillar of JS is prototypal inheritance
// it's the ability of the object to access properties of the parent object
// this is applicable to every data type in JS

const array = [];

// To access object's prototype we can do this
console.log(array.__proto__); // will get array object, where all arrays come from, with all its methods like push, pop, slice etc
console.log(array.__proto__.__proto__); // will get base object which stores all object methods like hasownProperty etc

//This is possible because arrays are also objects in JS
// The same works with functions

function a() {}

console.log(a.__proto__); // will get a base function object
console.log(a.__proto__.__proto__); // will get a base object because functions are also objects


