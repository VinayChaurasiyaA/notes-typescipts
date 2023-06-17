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

type user = {
    name : string,
    age : number
}

} 
export {} 
function userDetails(users:user) {