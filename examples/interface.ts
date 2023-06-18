type user = {
  name: string;
  age: number;
  fun(): string;
};
const vinay: user = {
  name: "vinay",
  age: 21,
  fun() {
    return "hi";
  },
};
interface user1 {
  name: string;
  age: number;
  googleId: string;
  fun(): string;
}

// added manually
// now you remember that you have to add one more property to the user1 interface
// but you forgot to add it to the vinay1 object
interface user1 {
  role: string;
}
const vinay1: user1 = {
  name: "vinay",
  age: 21,
  googleId: "vinay",
  fun() {
    return "hi";
  },
  role: "admin",
};
 // which in type you cannot add more properties to the object if you forgot
// type user = {
//     role : string
// }

console.log(vinay.fun());
