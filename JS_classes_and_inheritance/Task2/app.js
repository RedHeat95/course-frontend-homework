// Задача №2
// Реализуйте класс Worker (Работник), который будет создавать объект и иметь следующие свойства: name (имя), secondName (фамилия), rate (ставка за день работы), days (количество отработанных дней) сountOfDetails(количество выполненных деталей). Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days. У каждого объекта класса Worker должны быть доступны методы getName, getSecondName, getRate, getDays, каждый из которых будет возвращать соответствующее поле в объекте. И также методы setRate, setDays, которые будут устанавливать новые значения для соответственно свойств rate и days. Добавить метод, который будет увеличивать количество деталей на 1. Добавить метод, который будет делать ресет этого количества в 0

class Worker {

  constructor(name, secondName, rate, days, countOfDetails) {
    this.name = name;
    this.secondName = secondName;
    this.rate = rate; // ставка за день работы
    this.days = days; // количество отработанных дней
    this.countOfDetails = countOfDetails; //количество выполненных деталей
  }

  getSalary() {
    return `Зарплата: ` + +this.rate * +this.days + ` $`;
  }

  getName() {
    return `Имя: ` + this.name;
  }

  getSecondName() {
    return `Фамилия: ` + this.secondName;
  }

  getRate() {
    return `Cтавка за день работы: ` + this.rate;
  }

  getDays() {
    return `Kоличество отработанных дней: ` + this.days;
  }

  getCountOfDetails() {
    return `Количество выполненных деталей: ` + this.countOfDetails;
  }

  setRate(rate) {
    return this.rate = +rate;   
  }

  setDays(days) {
    return this.days = +days;
  }

  incrementCountOfDetails() {
    return this.countOfDetails = +this.countOfDetails + +1;
  }

  zeroCountOfDetails() {
    return this.countOfDetails = +this.countOfDetails * +0;
  }

}

let worker = new Worker('Александр', 'Шундрик', '100', '10', '1');

console.log(worker.getSalary()); // Зарплата
console.log(worker.getName()); // Имя
console.log(worker.getSecondName()); // Фамилия
console.log(worker.getRate()); // ставка за день работы
console.log(worker.getDays()); // количество отработанных дней
console.log(worker.getCountOfDetails()); //количество выполненных деталей

worker.setRate(200); // новая ставка за день работы
console.log(worker.getRate()); // показывает новую ставка за день работы
worker.setDays(1); // новое количество отработанных дней
console.log(worker.getDays()); // показать новое количество отработанных дней
console.log(worker.getSalary()); // показать новую зарплату

worker.incrementCountOfDetails(); // Добавляет 1 деталь
console.log(worker.getCountOfDetails()); // Показаывает количестов деталей
worker.zeroCountOfDetails(); // Обнуляет количество деталей
console.log(worker.getCountOfDetails()); // Показаывает количестов деталей