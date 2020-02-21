const array = [1, 2, 3];

function getMaxNumber(arr) {
    Math.max(arr); // won't work because max() function expects a list of numbers as arguments and here we try to pass an array
    //* if max() can't convert any of its arguments to number it will throw NaN
    return Math.max.apply(null, arr); // this will explicitly call max() with the list of numbers as th array will be converted to list of arguments
}

console.log(getMaxNumber(array));