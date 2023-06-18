Typescript
##### After we run a ts or tsc file then it generates a js or jsx file for a development process.
##### Once you are good to go with the ts to js file you can run it.
- synatax to run in terminal : ``` tsc filename.ts ```

- syntax:
``` let variableName: type = value ```
 
#### What is Typescript used for? 
- Typescript is used to avoid a problem which might cause in future where we don' have any clue what that data must we get (data type).
- Typescript is also used such that overall performance should be maintain their

In Js there is no (int or float ) type of data type there is just number. So does out Ts will have

Type Inference:
- You don't always have to put it's data type, cause type script is very smart it will understand most of the time which type of data should be their.
- like if you want to declare some values like  ``` const userId: number = 1; ``` 
instead of that even if you use ``` const number = 1 ``` it will work fine and typescript understand that it's a number type of data.

#### In typescript, for function we can even set return data type too. such that we will get exactly we need.
 - syntax
``` 
function hello(name:string):string {
        return name;
} 
```

We can even have return data type of more than 1 type:
- 
```
function getValue(userid : number): string | boolean {
    if(userid === 1) {
        return "200 ok";
    }
    else {
        return false;
    }
}
```
### There is a weird syntax for returing of an object

```
const user = {
    name : "vinay",
    age:10
}
const objectReturn= ({user}):{}=>{
    return {user}
}
console.log(objectReturn)
```

### Type Alias:
type is used to make your own data type, like as we don't know which type of data an object will be called so we will use, 
```  type objectname = {object} ```
eg..
```
type user = {
    name : string,
    age : number
}
 
function userDetails(users:user):user {
    return {name:"vinay" , age:10}
} 
```
#### readonly is used to just read the data, but if the data is in array form then it can be appended to the new 
```
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

```

### "&" 
is used for combining two or more data types
```
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
```
#### Arrays declaration, there are 2 types of array declaration either we can write datatype[] or we can write, Array<"datatype"> both works the same

eg.
```
const heroName : string[]= [];// this is one way of declaring of an array
const heroName1 : Array<string> = []; // this is another, both works the same
heroName.push("superman")
heroName1.push("batman");
```

####  union has like a OR operator, it can be either string or number (there can be more than 2 data type , where string and number are just an example).
 - Union and cominations(&) can be used in functions as well. But the issue arrises is that if the input is string or number then how can we use it's inbuilt functions.It can be solved by checking it's

 ``` typeof(inuput) ```
 ```
 function getUserData(input : string | number): string  | number {
    if(typeof input === "string" ) {
        return "200 ok" + input.toLowerCase();
    }
    else {
        return 200 + input.toFixed();
    }
}
 ```
```
var score: string | number = 10;
score = "hey nice one";
console.log(score); 
```
#### unions in array.
- unionialising the 2 or more than 2 types of array data type can be possible in the typescript
``` 
    datatype1[] | datatype2[]
```
   
```
 (datatype1 | datatype2)[]
```

a possible example for this senario is:
```
var arr : (string | number)[] = ["vinay", 2, "kumar", 3];
console.log(arr);
var newArr : string[] | number[] = ["vinay" , "kumar"];
newArr  = [2 , 3];
```
#### string[] | number[] it means that either whole array can be just string array or just number array, but not both
#### (string | number)[] it means that each element in the array can be either string or number

### Enums ( enums)
enums exits when you have to restrict somebodys choices for eg on e-commerce website you can limit the things to show or in plane booking system where their are 3-4 types of booking, aisle, middle and window so at the end user has 3-4 choices only
```
enum aeroplaneChoice {
  Aisle,
  Middle,
  Window,
}
/// now you can use this enum in your code
const seatSelection = aeroplaneChoice[0]; // this will give the value of the index
const seatSelection1 = aeroplaneChoice.Aisle; // this will give index or default value pair

console.log(seatSelection); // this will print 0 as it takes default value pair 0

```
If we will use enum like this, the generated js file will be all messed up so it's always recommended to use ``` const enum ```

#### Interface
An interface is a way to define the structure and shape of an object temporarly more like a class. 
Interface provides the reopening of the interface, which means you can add new properties just by declaring and adding manually
syntax
 ``` 
    interface name {
        // eg. name : string
    } 
 ```
whereas in **type** it has different synatax
```
type name = {
    // eg. name : string
}
```
```
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
```