var user1 = {name : "nerd", org: "dev"};
var user2 = {name : "nerd", org: "dev"};
var eq = user1 == user2;
console.log(eq); // gives false because two objects are different, though they have same properties

// to compare object properties we can stringify them
var eq2 = JSON.stringify(user1) == JSON.stringify(user2);
console.log(eq2); // gives true


