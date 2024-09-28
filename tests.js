const Person = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

Person.prototype.printPerson = function () {
  return this.firstName + ' ' + this.lastName;
};

const johnSilver = new Person('John', 'Silver');
console.log(johnSilver.printPerson());
