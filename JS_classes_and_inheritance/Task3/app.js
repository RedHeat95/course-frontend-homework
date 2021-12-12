// Задача №3
// Реализуйте класс MyString, объект которого будет иметь следующие методы: метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки.

class MyString {

  reverse(str) {
    return str.split('').reverse().join('');
  }

  unFirst(str) {
    return str.split('').map((item, index) => {
      if (index === 0) {
        return item.toUpperCase();
      }
      return item;
    }).join('');
  }

  ucWords(str) {    
    return str.split(' ').map(item => {
      return item[0].toUpperCase() + item.substr(1);
    }).join(' ');    
  }
}

let str = new MyString();

console.log(str.reverse('Hello'));
console.log(str.unFirst('hello'));
console.log(str.ucWords('hello world'));