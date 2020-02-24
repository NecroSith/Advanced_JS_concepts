//* Pass by value

// All primitive type variable are passed by value
const a = 5; // Memory is allocated for a
const b = a; // Here b copies value of a

b++;

console.log(a); // 5 because a value is untouched, only its copy affected
console.log(b); // 6

//* Pass by value means we just copy the value and stores it in a separate place in memory with no connection to the variable those value has been coped


//* Pass by reference

// Pass by reference works with objects

const obj1 = {name: 'Yan', age: 26}
const obj2 = obj1; // assign obj2 to the same address in memory as obj1

obj2.name = 'Ivan';

console.log(obj1); // { name: 'Ivan', age: 26 }
console.log(obj2); // { name: 'Ivan', age: 26 }

// obj2 changed obj1 properties as well because they share the same memory space with the same data

//* Arrays are also objects
const c = [1, 2, 3];
const d = c;

d.length = 2;
console.log(c); // [ 1, 2 ]
console.log(d); // [ 1, 2 ]

// We can copy a source array with its value to a seaparate chunk of memory
const e = [].concat(c);
c.push(666);

console.log(c); // [ 1, 2, 666 ]
console.log(e); // [ 1, 2 ], copied array not affected


// We can also make a copy of an object which will also be unaffected

const obj3 = {a: 'a', b: 'b'};
const clone = Object.assign({}, obj3); //* make a SHALLOW copy of an object
const clone2 = {...obj3};

obj3.c = 'c';

console.log(obj3); // { a: 'a', b: 'b', c: 'c' }
console.log(clone); // { a: 'a', b: 'b' }
console.log(clone2); // { a: 'a', b: 'b' }

//! clone and clone2 objects are copied and not affected by changes made in ojb3
//! but they still are affected by changes made in nested objects in obj3

const obj3 = {a: 'a', b: 'b', c: {d: 'd'}};
const clone = Object.assign({}, obj3);
const clone2 = {...obj3};

obj3.c.d = 666; 

console.log(obj3); // { a: 'a', b: 'b', c: { d: 666 } }
console.log(clone); // { a: 'a', b: 'b', c: { d: 666 } }
console.log(clone2); // { a: 'a', b: 'b', c: { d: 666 } }
//* Everyone was affected

// To fix it, one of the methods is to use JSON

const superClone = JSON.parse(JSON.stringify(obj3));
obj3.c.d = 9999999;

console.log(obj3); // { a: 'a', b: 'b', c: { d: 9999999 } }
console.log(superClone); // { a: 'a', b: 'b', c: { d: 666 } } unaffected!








