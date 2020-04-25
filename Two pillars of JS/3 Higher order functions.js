//* Higher order functions are functions that take function as an argument
//* or return a function

const authenticate = (person, admin = false) => {
    const arr = [];
    const delay = admin ? 5000000 : 1000000;
    for (let i = 0; i < delay; i++) {
        arr.push(i);
    }
    console.log(`${person.name} authenticated ${admin ? "as admin" : ''}`);
    return `${person.name} authenticated`;
}

const greet = (person) => {
    console.log(`${person.name}, greetings`);
    return `${person.name}, greetings`;
}

function letPersonLogin(person, fn) {
    if (person.level === 'admin') {
        return fn(person, true)
    } else {
        return fn(person)
    }
}

letPersonLogin({name: 'Yan', level: 'admin'}, authenticate);
letPersonLogin({name: 'Alex', level: 'guest'}, greet);

// We created a generic function letPersonLogin which takes some function as a parameter along with some data
// this data is then passed to the fn function
// So letPersonLogin is a wrapper function
//* Now we tell the function what to do during invocation, what data to pass and what external function to call