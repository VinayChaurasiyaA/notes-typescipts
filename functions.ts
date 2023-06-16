function addTwo(num: number) {
    return 2+num;
}
function login(userid : number , name : string , isEmployee: boolean = false) {
    return {userid , name , isEmployee}
}
login(2 , "vinay"); // 3rd parameter has default value
console.log(addTwo(2))
export {}