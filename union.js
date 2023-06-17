"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 10;
score = "hey nice one"; // union has like a OR operator, it can be either string or number
console.log(score); // this will print hey nice one
var vinay = {
    name: "vinay",
    role: "normal",
};
vinay = {
    username: "vinay",
    role: "admin",
};
console.log(vinay); // this will print { username: 'vinay', role: 'admin' }
// we can even use this union type in functions
function getUserData(input) {
    if (typeof input === "string") {
        return "200 ok" + input.toLowerCase();
    }
    else {
        return 200 + input.toFixed();
    }
}
console.log(getUserData(2));
