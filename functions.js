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
