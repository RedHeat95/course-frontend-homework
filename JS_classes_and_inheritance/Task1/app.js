// Задача №1 
// Создать класс счетчика, который будет иметь поле count - значение счетчика. Объект класса будет иметь следующие методы: метод для инкремента(+1) счетчика, метод для декремента(-1) счетчика, метод который будет возвращать (return) значение счетчика.

class Count {

  constructor(count) {
    this._count = count;
  }

  increment() {
    return this._count += 1;
  }

  decrement() {
    return this._count -= 1;
  } 
  
  getcount() {
    return this._count;
  }

}

let str = new Count(3);

console.log(str.increment());
console.log(str.decrement()); // Тут покажет исходное значение (3) т.к. отнимает 1 после увеличния данного числа на 1
console.log(str.getcount());