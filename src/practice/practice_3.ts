{
  interface Person<T> {
    firstName: string;
    lastName: string;
    age: number;
    eyeColor: string;
    car: T;
  }
  interface Car<T> {
    type: string;
    model: string;
    color: string;
    registration: T;
  }
  interface Registration {
    city: string;
    state: string;
    country: string;
  }
  const person: Person<Car<Registration>> = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    car: {
      type: "Fiat",
      model: "500",
      color: "white",
      registration: {
        city: "Houston",
        state: "Texas",
        country: "USA",
      },
    },
  };

  const car: Car<Registration> = {
    type: "Fiat",
    model: "500",
    color: "white",
    registration: {
      city: "Houston",
      state: "Texas",
      country: "USA",
    },
  };
}
