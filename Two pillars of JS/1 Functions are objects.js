// There is another way to create and invoke a function

const one = new Function('num', 'return num'); //* it's called function constructor

one();

// You can also add somethin to the existing function

//* In JS functions are objects with properties
// 1) name
// 2) code - which is read and executed
// 3) function properties like bind(), call() and apply()
// 4) special callable object which we can create by doing

one.two = 2;

// and thus store the extra data inside a function