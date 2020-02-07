var faroriteFood = 'banana'; // gets fully hoisted, i.e. it's undefined before runtime

var changeMind = function() { //* changeMind get fully hoisted as well as it's function expression
    console.log(favoriteFood);
    
    var favoriteFood = 'apple'; //* fully hoisted inside execution context of changeMind function but not global
    //! so favoriteFood variable is undefined before the function is executed, that's why the first log gets "undefined"

    console.log(favoriteFood);
    
}

changeMind();
// outputs undefined, 'apple'