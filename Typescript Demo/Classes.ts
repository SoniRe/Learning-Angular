// Write Class Name in Pascal case
// ! Mark to avoid error example id!: number

// Can have either default or parametrized constructor

// Private Variable visible inside class
// Protected Variable visible inside class and inherited class
// Public
import { Login, User } from "./interfaces";

// import * as UserLogn from "./interfaces"

interface Address {
  street: string;
  city: string;
  state: string;
  pin: string;
}

class Employee implements Login {
  // To make variable private use #id

  #id: number;
  protected name: string;
  address: Address;

  constructor(id: number, name: string, address: Address) {
    this.#id = id;
    this.name = name;
    this.address = address;
  }

  Login(): User {
    return {
      name: "John",
      id: 1,
      email: "",
    };
  }

  // Class Methods
  getNameWithAddress(): string {
    return this.name + " from " + this.address;
  }

  static getEmployeeCount(): number {
    return 50;
  }

  // Getter
  get empId(): number {
    return this.#id;
  }

  //Setter
  set empId(id: number) {
    this.#id = id;
  }
}

class Manager extends Employee {
  constructor(id: number, name: string, address: Address) {
    super(id, name, address);
  }

  getName(): string {
    return this.name;
  }
}

let John = new Employee(1, "John", {
  street: "ABC",
  city: "Bangalore",
  state: "Karnatka",
  pin: "50076",
});

console.log(Employee.getEmployeeCount());

console.log(John);

let addressWithName = John.getNameWithAddress();

console.log(addressWithName);

John.empId = 100;

console.log(John.empId);

let Mike = new Manager(1, "Mike", {
  street: "ABC",
  city: "Bangalore",
  state: "Karnatka",
  pin: "50076",
});

console.log(Mike.getName());
