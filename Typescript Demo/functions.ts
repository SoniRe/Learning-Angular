// Always have return type
// Here num3 is optional paramter
function add(num1: number, num2: number, num3?: number): number {
  return num3 ? num1 + num2 + num3 : num1 + num2;
}

console.log(add(1, 2, 3));

console.log(add(2, 3));

// Required Parameter
const subtract = (num1: number, num2: number, num3 = 10): number => {
  return num1 - num2 - num3;
};

console.log(subtract(10, 2));

function add2(num1: number, num2: number, num3: number[]): number {
  return num1 + num2 + num3.reduce((acc, curr) => acc + curr);
}

console.log(add2(1, 2, [3, 4, 5]));

// Generics
function getItems<Type>(items: Type[]): Type[] {
  return new Array<Type>().concat(items);
}

let concatResult = getItems([1, 2, 3]);

console.log(concatResult);

let concatString = getItems(["a", "b", "c"]);

console.log(concatString);

// Classes
