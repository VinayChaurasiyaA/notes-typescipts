function identityOne(val) {
    return val;
}
// identityOne<can_Write_Anything>
// generics are used if the type of the argument is not known and we want to return the same type of argument
var output = identityOne(2);
console.log(output);
// using type parameter in generic
function parameterGeneric(valOne, valTwo) {
    return {
        valOne: valOne,
        valTwo: valTwo,
    };
}
var outputTwo = parameterGeneric("vinay", 2);
// generic in classes
var generic = /** @class */ (function () {
    // public cart : T[] = [];
    function generic(cart) {
        this.cart = cart;
        this.cart = cart;
    }
    generic.prototype.addToCart = function (item) {
        this.cart.push(item);
    };
    generic.prototype.displayCart = function () {
        return this.cart;
    };
    return generic;
}());
var cartOne = new generic(["mango", "banana"]);
cartOne.addToCart("apple");
var display = cartOne.displayCart();
cartOne.addToCart("orange");
console.log(display);
