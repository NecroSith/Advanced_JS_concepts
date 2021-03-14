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

let dragon = {
  name: 'Taski',
  fire: true,
  smash() {
    console.log('hit!');
    return 5;
  },
  sing() {
    if (this.fire) {
      console.log(`I am ${this.name}! I can breathe fire`);
    }
  }
};

let lizard = {
  name: 'Huty',
  smash() {
    console.log('lizard hit');
    return 2;
  }
};

// If we need to borrow some property of another object we can bind it to the object we need
const lizardSing = dragon.sing.bind(lizard);
console.log(lizardSing()); // undefined because lizard doesn't have fire property

// but if want to get all the properties or many of them binding them can become convoluted
// we can set an object's prototype instead
lizard.__proto__ = dragon; //! Don't do this in production, __proto__ is  built in method which must not be reassigned
lizard.sing(); // we get 'I am Huty! I can breathe fire'

// Further examples can be found in Plunkr necro_sith

