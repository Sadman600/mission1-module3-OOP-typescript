{
  // Access Modifiers

  class Person {
    public name: string;
    private blance: number;
    protected id: string;
    constructor(name: string, blance: number, id: string) {
      this.name = name;
      this.blance = blance;
      this.id = id;
    }
    get Blance(): number {
      return this.blance;
    }
    set setBlance(newBalance: number) {
      this.blance = this.blance + newBalance;
    }
  }
  class Child extends Person {
    constructor(name: string, blance: number, id: string) {
      super(name, blance, id);
    }
    getRes() {
      this.id;
    }
  }
  const person = new Person("Jhon", 55, "123");
  const res = (person.setBlance = 50);
  const child = new Child("55", 55, "123");
  console.log(person.Blance);
}
