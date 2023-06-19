function identityOne<lol>(val : lol) : lol {
    return val;
}
// identityOne<can_Write_Anything> 

// generics are used if the type of the argument is not known and we want to return the same type of argument
const output = identityOne(2);
console.log(output)
