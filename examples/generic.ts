function identityOne<lol>(val: lol): lol {
  return val;
}
// identityOne<can_Write_Anything>

// generics are used if the type of the argument is not known and we want to return the same type of argument
const output = identityOne(2);
console.log(output);

// using type parameter in generic
function parameterGeneric<T, U>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}
const outputTwo = parameterGeneric("vinay", 2);

// generic in classes
class generic<T> {
  // public cart : T[] = [];
  constructor(public cart: T[]) {
    this.cart = cart;
  }
  addToCart(item: T) {
    this.cart.push(item);
  }
  displayCart() : T[]{
    return this.cart
  }
}
const cartOne = new generic<string>(["mango", "banana"]);
cartOne.addToCart("apple");
const display = cartOne.displayCart();
console.log(display);
cartOne.addToCart("orange");