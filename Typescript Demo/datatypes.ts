let myName: string;

myName = "Aditya";

let newName = myName.toUpperCase();

console.log(newName);

let age: number;

age = 20.5;

let dob = "25";

let result = parseInt("23");

let isValid: boolean = false;

console.log(isValid);

let arr1: string[];

arr1 = ["Aditya", "Param"];

let arr2: Array<number>;

arr2 = [1, 2, 3, 4, 5];

let results = arr2.filter((num) => {
  return num > 2;
});

let num = arr2.find((num) => num === 0);

console.log(num);

let sum = arr2.reduce((acc, curr) => {
  acc += curr;
  return acc;
});

console.log(sum);

// Enums
const enum Color {
  Red,
  Green,
  Blue,
}

let c: Color = Color.Blue;

// Tuples
let swapNumbs: [number, number];

function swapNumbers(num1: number, num2: number): [number, number] {
  return [num2, num1];
}

swapNumbs = swapNumbers(10, 20);

swapNumbs[0];

// Don't use any
