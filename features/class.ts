class Person {
  age: number;
  constructor (age: number) {
    this.age = age;
  }
  sayName(): void {
    console.log('My name is Zulfizar')
  }

  sayAge(): void {
    console.log('I am 20 years old.')
  }
  protected setAge(): void {
    this.age = this.age + 1;
  }
}

const somebody = new Person(19);

somebody.sayAge()

class Zulfizar extends Person {
  constructor (age: number) {
    super(age)
  }
  private myBirthday(): Date {
    return new Date()
  }

  public sayToday(): void {
    console.log(this.myBirthday())
  }

  public sayAge(): void {
    this.setAge()
    console.log(this.age)
  }
}

const me = new Zulfizar(20);
me.sayToday()
me.sayAge()


