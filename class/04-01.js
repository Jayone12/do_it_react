function User(firstName, lastName) {
  this.name(firstName, lastName);
  this.age = 12;
}

//인스턴스 함수를 선언하는 예제
User.prototype.name = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

const classTest = new User('jay', 'park');

console.log(classTest); // User { firstName: 'jay', lastName: 'park', age: 12 }
