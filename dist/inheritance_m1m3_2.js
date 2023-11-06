"use strict";
{
    // Inheritance
    class Car {
        constructor(brandName) {
            this.brandName = brandName;
        }
        present() {
            console.log(`I have a ${this.brandName} `);
        }
    }
    class Model extends Car {
        constructor(brandName, model) {
            super(brandName);
            this.model = model;
        }
        show() {
            console.log(`I have a ` + this.present() + `it is a ` + this.model);
        }
    }
    let myCar = new Model("ford", "Mustang");
}
