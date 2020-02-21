// function currying

function multiply(a, b) {
    return a * b;
}

const mulitplyByTwo = multiply.bind(this, 2);
//* We've just created extension of multiply() function with partial argument
//* now we can use multiplyByTwo as a function that takes 1 argument and multiplies it by 2

console.log(mulitplyByTwo(5)); // 10

const mulitplyBySix = multiply.bind(this, 6);
console.log(mulitplyBySix(6)); // 36

//* Thus we can create a reusable extensible function