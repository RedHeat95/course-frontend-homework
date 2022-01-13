// Задача №5
// Реализуйте класс Student, который будет наследовать класс User. Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User), year (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента. Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получить программно, используя объект Date (https://learn.javascript.ru/datetime).

class User {

  constructor(name, surname){
    this.name = name;
    this.surname = surname;
  }

  getFullName() {
    return this.name + ` ` + this.surname;
  }

}

class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year; // год поступления в вуз
  }

  getCourse() {
    let date = new Date();
    return +date.getFullYear() - +this.year;
  }

}

let user = new Student('Sacha', 'Shundrik', '2018');

console.log(user.getFullName());
console.log(user.getCourse());