"use strict";
// Write Class Name in Pascal case
// ! Mark to avoid error example id!: number
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_id;
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(id, name, address) {
        // To make variable private use #id
        _Employee_id.set(this, void 0);
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.address = address;
    }
    Login() {
        return {
            name: "John",
            id: 1,
            email: "",
        };
    }
    // Class Methods
    getNameWithAddress() {
        return this.name + " from " + this.address;
    }
    static getEmployeeCount() {
        return 50;
    }
    // Getter
    get empId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    //Setter
    set empId(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
}
_Employee_id = new WeakMap();
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
    getName() {
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
//# sourceMappingURL=Classes.js.map