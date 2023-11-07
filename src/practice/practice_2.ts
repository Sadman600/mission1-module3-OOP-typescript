{
  // Generic Array
  type GenericArray<T> = Array<T>;
  type Person = {
    firstName: string;
    lastName: string;
    age: number;
    eyeColor: string;
  };
  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
  };
  const persons: GenericArray<Person> = [person];
}
