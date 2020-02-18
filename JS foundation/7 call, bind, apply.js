//* call()

function a() {
    console.log('hi');
}

a.call(); // outputs 'hi'

// In JS when a function is called it just calls a property call() to call itself
// so a() is just shorthand for a.call()
// and a() = a.call()

//* Also, call can be used to borrow some function from one object and apply it to the other

const wizard = {
    name: 'Mannimarko',
    mana: 100,
    summonombie(num1 = 0, num2 = 0) {
        this.mana = 50 + num1 + num2;
    }
}

const mage = {
    name: 'Gannibal',
    mana: 90
}

wizard.summonombie();
console.log(wizard.mana); // 50

wizard.summonombie.call(mage); // in the argument we place name of the object which should call function summonZombie
console.log(mage.mana); // outputs 50!

// In case we have arguments in the function we want to borrow, they go after the name of the function

wizard.summonombie.call(mage, 30, 20);
console.log(mage.mana); // outputs 100!


//* apply()
// apply() does the same thing as call() in the second case, i.e. making it possible to call function property from another object
// but it takes an array of arguments as second parameter instead of comma separated values

wizard.summonombie.apply(mage, [10, 100]); // we get 160
console.log(mage.mana);

//* using call() or apply() really depends on the number of arguments in the burrowing function property


//* bind()
//* bind() is like call

wizard.summonombie.bind(mage, 100, 100); //! won't work, because bind() doesn't call a function but store the borrowing for later use
console.log(mage.mana);

const manaDrain = wizard.summonombie.bind(mage, 100, 100);
manaDrain(); // now mage.mana is 250!
console.log(mage.mana);


