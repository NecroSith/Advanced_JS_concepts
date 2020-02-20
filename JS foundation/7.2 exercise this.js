const a = {
    name: 'Yan',
    hello() {
        console.log(this); // this refers to obj a because it's on the left -  a.hello()
    }
};

const b = {
    name: 'Yan',
    hello() {
        return function() {
            console.log(this); // this refers to global/window object
        }
    }
};

const c = {
    name: 'Yan',
    hello() {
        return () => {
            console.log(this); // due to arrow function this refers to object c
        }
    }
};

a.hello();
b.hello()();
c.hello()();