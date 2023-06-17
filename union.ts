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

export {}; // this is to avoid the error of redeclaration of block scoped variable
