// Create a multiplyBy function and a couple of other functions that utilize the former

// Option 1

function multiplyBy(a, b) {
    console.log(a * b);
    return a * b;
}

function multiplyByTwo(a) {
    return multiplyBy(a, 2);
}

function multiplyByTen(a) {
    return multiplyBy(a, 10);
}

multiplyByTwo(3);
multiplyByTen(3);


// Option 2

// function multiplyBy(a) {
//     return function(b) {
//         console.log(a * b);
//         return a * b;
//     }
// }

const multiplyBy = a => b => a * b;

const multiplyByTwo = multiplyBy(2);
const multiplyByTen = multiplyBy(10);
multiplyByTwo(2);
multiplyByTen(10);