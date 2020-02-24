// Javascript has 7 types

//* Primitive types
// 1 Number
// 2 Boolean
// 3 String
// 4 undefined
// 5 null
// 6 Symbol

//* Non-primitive types
// 7 Object
// 7a Function

// Primitive types are those that represent a single value

console.log(typeof null); //! we get 'object'. It's a mistake in JS. Null is its own type

undefined // absence of definition
null // ansence of value

typeof [] // we get 'object because array in JS is an object
// We can check if something is an array by doing this
Array.isArray([1, 3, 2]); // we get true
Array.isArray(true); //we get false


typeof function () {} //* we get 'function' but a function is actually an object as well


//* Everything in JS is an object

//* All primitive values are automatically wrapped in Object definition by JS
typeof true; // Boolean, a primitive type
console.log(true.toString()); //* we get 'true' in string form

//* we get true in string form because when true is created its value is wrapped as
Boolean(true);

//* it behaves like an object and object methods can be called to manage it