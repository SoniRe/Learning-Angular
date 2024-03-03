"use strict";
// Always have return type
// Here num3 is optional paramter
function add(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add(1, 2, 3));
console.log(add(2, 3));
// Required Parameter
const subtract = (num1, num2, num3 = 10) => {
    return num1 - num2 - num3;
};
console.log(subtract(10, 2));
function add2(num1, num2, num3) {
    return num1 + num2 + num3.reduce((acc, curr) => acc + curr);
}
console.log(add2(1, 2, [3, 4, 5]));
// Generics
function getItems(items) {
    return new Array().concat(items);
}
let concatResult = getItems([1, 2, 3]);
console.log(concatResult);
let concatString = getItems(["a", "b", "c"]);
console.log(concatString);
// Classes
//# sourceMappingURL=functions.js.map