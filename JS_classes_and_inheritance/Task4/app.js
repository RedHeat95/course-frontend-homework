// Задача №4
// Реализуйте класс User, который будет иметь следующие свойства: имя, фамилия, email; следующие методы: getFullName, getEmail.

class User {

  constructor (name, sunName, email) {
    this.name = name;
    this.sunName = sunName;
    this.email = email;
  }

  getFullName() {
    return this.name + ` ` + this.sunName;
  }

  getEmail() {
    return this.email;
  }
}

let str = new User('Sacha', 'Shundrik', 'RedHead@mail.ru');

console.log(str.getFullName());
console.log(str.getEmail());