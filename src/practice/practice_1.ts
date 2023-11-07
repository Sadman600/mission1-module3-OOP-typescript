{
  // Interface and type aliases
  interface Car {
    type: string;
    model: string;
    color: string;
    price: number;
  }
  interface Registration extends Car {
    city: string;
    state: string;
    country: string;
  }
  const registration = {
    city: "Houston",
    state: "Texas",
    country: "USA",
  };
  const car: Registration = {
    type: "Fiat",
    model: "500",
    color: "white",
    price: 10000,
    ...registration,
  };
  type Address = {
    city: string;
    state: string;
    country: string;
  };
  type Person = Address & {
    firstName: string;
    lastName: string;
    age: number;
    eyeColor: string;
  };
  const address = {
    city: "Houston",
    state: "Texas",
    country: "USA",
  };
  const person: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    ...address,
  };
  type Rolls1 = number[];
  interface Rolls2 {
    [index: number]: number;
    // [0]: number;
    // [1]: number;
    // [2]: number;
    // [3]: number;
  }
  const rolls1: Rolls2 = [1, 2, 3, 4];
  type Add = (x: number, y: number) => number;
  interface Add2 {
    (x: number, y: number): number;
  }
  const add: Add2 = (x, y) => x + y;
}
