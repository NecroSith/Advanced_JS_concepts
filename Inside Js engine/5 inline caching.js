// In V8 there is a tool for optimizing JS code called
// inline caching


// Let's say we have a function
function findUser(user) {
    return `Found ${user.firstName} ${user.lastName}`;
}

const userData = {
    firstName: 'Yan',
    lastName: 'Pustynnyy'
}

findUser(userData);
// If findUser call is repeated many times
// js engine just replaces it with
// 'Found Yan Pustynnyy' to avoid repeated function calls to not get back to this function over and over again