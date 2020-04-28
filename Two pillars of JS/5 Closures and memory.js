//* We can use closures to make functions more memory efficient

function doStuff(index) {
    const arr = new Array(70000).fill('test');
    console.log('created');
    return arr[index];
}

doStuff(12); // created
doStuff(123); // created
doStuff(2134); // created
// We get 'created' 3 times because we call the function 3 times and 'arr' array is created all over again 3 times

//* We can use closure scope to store 'arr' array in memory heap so it is not created every time the function is invoked
//* but created only once

function doStuff2() {
    const arr = new Array(70000).fill('test');
    console.log('created again');
    return function(index) { // create closure by returning a function
        return arr[index];
    }
}

const getStuff = doStuff2();
getStuff(12); // created again
getStuff(124); //* nothing
getStuff(1231); //* nothing
//* here the whole array is stored in memory as it's now enclosed