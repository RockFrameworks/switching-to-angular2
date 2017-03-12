class Human {
  static totalPeople = 0;
  _name; // ES2016 property declaration syntax
  constructor(protected name: string, private age: number ) {
    Human.totalPeople += 1;
  }
  talk() {
    return `Hi, I'm ${this.name}!`;
  }
}

class Developer extends Human {
  _languages; // ES2016 property declaration syntax
  constructor(name: string, private languages:string[], age: number ) {
    super(name, age);
  }
  talk() {
    return `${super.talk()} And I know ${this.languages.join(', ')}.`;
  }
}
let human = new Human('foo', 42);
human.age = 42;
human.name = 'bar';
