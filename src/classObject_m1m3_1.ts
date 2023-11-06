{
  // Class and Object
  class Car {
    // name: string;
    // year: number;

    constructor(public name: string, public year: number) {
      //   this.name = name;
      //   this.year = year;
    }
    age() {
      const date = new Date();
      const carAge = date.getFullYear() - this.year;
      console.log(carAge);
    }
  }

  const myCar1 = new Car("Ford", 2014);
  myCar1.age();
}
