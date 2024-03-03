"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = {
    name: "John",
    id: 1,
    email: "",
};
let employee = { name: "John", id: 1, email: "", salary: 1000 };
const { name, id, email } = user;
console.log("My name is", name);
const [user1, user2, user3] = [
    {
        name: "Aman",
        id: 1,
        email: "",
    },
    {
        name: "Don",
        id: 2,
        email: "",
    },
    {
        name: "Poke",
        id: 3,
        email: "",
    },
];
console.log(user2);
// Decorators
// Starting with @ they change behaviour of
// classes and functions
// @Component({})
class Component {
    constructor(name) { }
}
//# sourceMappingURL=interfaces.js.map