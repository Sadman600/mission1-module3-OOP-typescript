{
  // ** Type Guard using instanceof

  class Person {
    constructor(public name: string, public age: number) {}
    makeDeveloper() {
      console.log("All in All developer");
    }
  }

  class JrDeveloper extends Person {
    constructor(name: string, age: number) {
      super(name, age);
    }
    makeJrDeveloper() {
      console.log("HTML, CSS, React");
    }
  }
  class SrDeveloper extends Person {
    constructor(name: string, age: number) {
      super(name, age);
    }
    makeSrDeveloper() {
      console.log("HTML, CSS, React, Typescript");
    }
  }
  function getDev(dev: Person) {
    if (dev instanceof JrDeveloper) {
      dev.makeJrDeveloper();
    } else if (dev instanceof SrDeveloper) {
      dev.makeSrDeveloper();
    } else {
      dev.makeDeveloper();
    }
  }
  let jrDev = new JrDeveloper("Sakib", 28);
  let srDev = new SrDeveloper("Sakib", 28);
  let dev = new Person("Sakib", 28);
  getDev(srDev);
}
