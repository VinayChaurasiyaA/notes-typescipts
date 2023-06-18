var score: string | number = 10;
score = "hey nice one"; // union has like a OR operator, it can be either string or number
console.log(score); // this will print hey nice one

type User = {
  name: string;
  role: string;
};
type Admin = {
  username: string;
  role: string;
};

var vinay: User | Admin = {
  name: "vinay",
  role: "normal",
};

vinay = {
  username: "vinay",
  role: "admin",
};
console.log(vinay); // this will print { username: 'vinay', role: 'admin' }

// we can even use this union type in functions
function getUserData(input : string | number): string  | number {
    if(typeof input === "string" ) {
        return "200 ok" + input.toLowerCase();
    }
    else {
        return 200 + input.toFixed();
    }
}
console.log(getUserData(2));

// unionializing an array is also possible
var arr : (string | number)[] = ["vinay", 2, "kumar", 3];
// string[] | number[] it means that either whole array can be just string array or just number array, but not both
// (string | number)[] it means that each element in the array can be either string or number
export {}; // this is to avoid the error of redeclaration of block scoped variable
