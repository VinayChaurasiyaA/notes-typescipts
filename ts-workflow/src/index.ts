class User {
  public name: string;
  public email: string;
  public city?: string;
  // the above method to make public and assign the data type is what typescript documnetation says

//   private _courseCount: number = 1;
  protected _courseCount: number = 1; // this provides the functionality of having this class and which ever classes will inherit it, those will get protected values too.
  


  // whereas we could even use constructor to do the same thing, constructor(public name : string , public email : string , public city : string)
  constructor(name: string, email: string, city: string) {
    this.name = name;
    this.email = email;
    this.city = city;
  }
  // there is a getters and setters in typescript
  // getters and setters are used to get and set the values of the object
  // getters and setters are used to access the private properties of the object
  get courseCount(): number {
    return this._courseCount;
  }
  set courseCount(count: number) {
    // a setter never returns anything and it takes a parameter to set the value
    if (count <= 1) {
      throw new Error("Invalid course count");
    }
    this._courseCount = count;
  }
}
class subUser extends User {
    isFamily : boolean = true;
    changeCourseCount() {
        this._courseCount+=1;
    }
}

const vinay = new User("vinay", "v@gmail.com", "bangalore");
console.log(vinay);
