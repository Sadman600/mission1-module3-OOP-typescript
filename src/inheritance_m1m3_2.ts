{
  // Inheritance

  class Car {
    brandName: string;
    constructor(brandName: string) {
      this.brandName = brandName;
    }
    present() {
      console.log(`I have a ${this.brandName} `);
    }
  }
  class Model extends Car {
    model: string;
    constructor(brandName: string, model: string) {
      super(brandName);
      this.model = model;
    }
    show() {
      console.log(`I have a ` + this.present() + `it is a ` + this.model);
    }
  }

  let myCar = new Model("ford", "Mustang");
}
