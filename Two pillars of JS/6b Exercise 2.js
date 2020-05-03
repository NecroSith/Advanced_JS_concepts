//Problem 

const array = [1,2,3,4];
for(var i=0; i < array.length; i++) {
  setTimeout(function(){
    console.log('I am at index ' + i)
  }, 3000)
}

// outputs
// I am at index 4
// I am at index 4
// I am at index 4
// I am at index 4


// Solution 1

const array = [1,2,3,4];
for(let i=0; i < array.length; i++) { //* We changed var to let as it, just like const, allows block scoping
    //* It creates scope for each value of 'i'
  setTimeout(function(){
    console.log('I am at index ' + i);
  }, 3000);
}

// Solution 2

const array = [1,2,3,4];
for(var i=0; i < array.length; i++) {
    (function(index){ //* We can wrap setTimeout in IIF where we pass i as a parameter. This parameter is kept into closure and keeps its value
        setTimeout(function(){
            console.log('I am at index ' + index);
        }, 3000);
    })(i);
}