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
