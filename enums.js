var aeroplaneChoice;
(function (aeroplaneChoice) {
    aeroplaneChoice[aeroplaneChoice["Aisle"] = 0] = "Aisle";
    aeroplaneChoice[aeroplaneChoice["Middle"] = 1] = "Middle";
    aeroplaneChoice[aeroplaneChoice["Window"] = 2] = "Window";
})(aeroplaneChoice || (aeroplaneChoice = {}));
/// now you can use this enum in your code
var seatSelection = aeroplaneChoice[0]; // this will give the value of the index
var seatSelection1 = aeroplaneChoice.Aisle; // this will give index or default value pair
console.log(seatSelection); // this will print 0 as it takes default value pair 0
console.log(seatSelection1)