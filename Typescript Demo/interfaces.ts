export interface User {
  name: string;
  age?: number; // Making age optional
  id: number;
  email: string;
}

let user: User = {
  name: "John",
  id: 1,
  email: "",
};

interface Employees extends User {
  salary: number;
}

let employee: Employees = { name: "John", id: 1, email: "", salary: 1000 };

export interface Login {
  Login(): User;
}

const { name, id, email } = user;

console.log("My name is", name);

const [user1, user2, user3]: User[] = [
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
  constructor(name: string) {}
}
