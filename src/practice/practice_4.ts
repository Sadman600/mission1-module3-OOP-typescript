{
  const myFunc = <T extends Person>(param: T): T[] => {
    return [param];
  };

  interface Person {
    firstName: string;
    lastName: string;
    age: number;
    eyeColor: string;
  }
  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
  };
  const result = myFunc<Person>(person);
}
