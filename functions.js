"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
