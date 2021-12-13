// Задача №3
// Напишите код, который добавит символ двоеточие(':') между нечетными числами. Например, число 556 результат должен быть '5:56', 566 -> 566, 655 -> 65:5

let numb = 1122334455;
let str = '1122334455';

function inter(num) {
  let newNum = num.toString().split('');
  for (let i = 0; i < newNum.length; i++) {
    if (newNum[i - 1] % 2 === 0 && newNum[i] % 2 === 0) {
      newNum.splice(i, 0, ':');
    }
  }
  return newNum.join('');
}

console.log(inter(numb));
console.log(inter(str));