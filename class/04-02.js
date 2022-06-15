class User {
  static create(firstName, lastName) {
    return new User(firstName, lastName);
  }
  constructor(firstName, lastName) {
    this.name(firstName, lastName);
  }
  name(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  age = 12;
}

const classTest = new User('jay', 'park');

console.log(classTest); // User { age: 12, firstName: 'jay', lastName: 'park' }

class Skill extends User {
  constructor(firstName, lastName, skill) {
    super(firstName, lastName);
    this.skill = skill;
  }
}

const skill = new Skill('jay', 'park', 5);
console.log(skill); // Skill { age: 12, firstName: 'jay', lastName: 'park', skill: 5 }
