type user = {
    name : string , 
    age : number,
    fun() : string
}
const vinay : user = {
    name : "vinay" ,
    age : 21,
    fun()  {
        return "hi"
    }
}
console.log(vinay.fun());

