// https://www.typescriptlang.org/docs/handbook/2/objects.html
function addTwo(num: number) {
    return 2+num;
}
function login(userid : number , name : string , isEmployee: boolean = false) {
    return {userid , name , isEmployee}
}
login(2 , "vinay"); // 3rd parameter has default value
console.log(addTwo(2))
// we can get certain data type too
function employee(name : string): string {
    return name;
}
// this is how you can have more than 1 return data ty
function getValue(userid : number): string | boolean {
    if(userid === 1) {
        return "200 ok";
    }
    else {
        return false;
    }
}
// if you love arrow function
const getArrowValue = (userid: number):string =>{
    return "vinay"
}
// mapping
const heros:string[] = ["spiderman" , "antman" , "bablu"];

// below codes from input hero:string can be remove 
heros.map((hero:string): string => {
    return `${hero} is strong`
})
// their is a weird syntax for returning a object
const user = {
    name : "vinay",
    age:10
}
const objectReturn= ({user}):{}=>{
    return {user}
}
console.log(objectReturn)
// this is alias : type
type user = {
    name : string,
    age : number
}
 
function userDetails(users:user):user {
    return {name:"vinay" , age:10}
}
// readonly type of things where you can't change anything you can just read
type user1 = {
    readonly _id : string[],
    readonly age : number,
    name : string
}
let myUser : user1 = {
    _id : ["1"],
    name : "vinay",
    age : 10
}
myUser.name = "rajan";
myUser._id.push("2");
// myUser.age = 10; // this will give error

function creatinguser(user : user1) {
    return user;
}
console.log(myUser);

// & is used for combining two or more types
type cardNumber = {
    cardNumber : number
}
type cardHolder = {
    cardHolder : string
}
type cardDetails  = cardNumber & cardHolder & {
    cvv : number
}
const card : cardDetails = {
    cardNumber : 123456789,
    cardHolder : "vinay",
    cvv : 123
}

export {} 