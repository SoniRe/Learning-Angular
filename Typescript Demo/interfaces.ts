interface User {
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
