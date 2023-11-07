{
  // Polymorphism

  class Person {
    getSleep() {
      console.log("Sleep 8 hours");
    }
  }
  class Student extends Person {
    getSleep() {
      console.log("Sleep 7 hours");
    }
  }
  class Developer extends Person {
    getSleep() {
      console.log("Sleep 6 hours");
    }
  }
  const getSeleepHoure = (params: Person) => {
    params.getSleep();
  };
  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();
  getSeleepHoure(person1);
  getSeleepHoure(person2);
  getSeleepHoure(person3);
}
