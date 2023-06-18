"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// https://www.typescriptlang.org/docs/handbook/2/objects.html
function addTwo(num) {
    return 2 + num;
}
function login(userid, name, isEmployee) {
    if (isEmployee === void 0) { isEmployee = false; }
    return { userid: userid, name: name, isEmployee: isEmployee };
}
login(2, "vinay"); // 3rd parameter has default value
console.log(addTwo(2));
// we can get certain data type too
function employee(name) {
    return name;
}
// this is how you can have more than 1 return data ty
function getValue(userid) {
    if (userid === 1) {
        return "200 ok";
    }
    else {
        return false;
    }
}
// if you love arrow function
var getArrowValue = function (userid) {
    return "vinay";
};
// mapping
var heros = ["spiderman", "antman", "bablu"];
// below codes from input hero:string can be remove 
heros.map(function (hero) {
    return "".concat(hero, " is strong");
});
// their is a weird syntax for returning a object
var user = {
    name: "vinay",
    age: 10
};
var objectReturn = function (_a) {
    var user = _a.user;
    return { user: user };
};
console.log(objectReturn);
function userDetails(users) {
    return { name: "vinay", age: 10 };
}
var myUser = {
    _id: ["1"],
    name: "vinay",
    age: 10
};
myUser.name = "rajan";
myUser._id.push("2");
// myUser.age = 10; // this will give error
function creatinguser(user) {
    return user;
}
console.log(myUser);
