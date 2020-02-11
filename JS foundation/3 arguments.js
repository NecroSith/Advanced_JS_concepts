// arguments object is an object which contains all the arguments of a function
function test(val1, val2, val3) {
    console.log(arguments);
    // we can convert arguments to an array using Array.from()
    console.log(Array.from(arguments)); // outputs [ 'first', 'second', 'third' ]
}

// We can also get arguments by using spread/rest operator
function test2(...args) {
    console.log(args); // outputs [ 1, 2, 3 ], already an array
}

test('first', 'second', 'third');
// outputs [Arguments] { '0': 'first', '1': 'second', '2': 'third' }
test2(1, 2, 3);

