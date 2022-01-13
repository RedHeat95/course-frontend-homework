// Задача №3
// Написать функцию, которая будет возвращать количество вызовов этой функции в квадрате. (Использовать замыкание).

let calc = 0;

function calcCall() {     
    return function() {
        return Math.pow(calc++, 2);     
    }
}
  
let calcer = calcCall();

console.log(calcer());
console.log(calcer());
console.log(calcer());
console.log(calcer());