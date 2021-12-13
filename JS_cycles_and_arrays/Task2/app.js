// Задача №2
// Создать массив из 20 чисел. Необходимо высчитать сумму всех элементов.

let arr = [];

for (let i = 0; i < 20; i++) {
  arr.push(i + 1);
}

console.log(arr);

let newArr = arr.reduce((prev, curr) => {
  return prev + curr;
}, 0);

console.log(newArr);