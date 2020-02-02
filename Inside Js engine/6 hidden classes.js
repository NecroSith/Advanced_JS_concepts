// Another tool we should be aware of when writing optimized code
// is hidden classes and how you can affect performance by assigning properties to classes

function Animal(x, y) {
    this.x = x;
    this.y = y;
}

const obj1 = new Animal(2, 3);
const obj2 = new Animal(3, 4);

obj1.a = 1;
obj1.b = 2;
// By reversing order of assigning properties to a class
// we confuse compiler and make it work slower
// Because compiler use hidden class to say that obj1 and obj2 are of the same class
// and they have the same properties
obj2.b = 3;
obj2.a = 4;

// And different order makes compiler think that these object are not of the same class since they don't have shared properties
// and it makes it run slower

// Solutions:
// 1) Init and assign all properties in the constructor
// 2) Assign properties in the same order

// Another problem related to hidden classes involves using delete
delete obj2.x;
// obj2 and obj1 don't match up anymore so sompiler will think they are of different hidden classes
// which also will slow it down

//* We should write predictable code not only for humans but for machines
//* So compiler and therefore our app will run as fast as possible