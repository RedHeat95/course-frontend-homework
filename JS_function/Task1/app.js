// Задача №1
// Написать функцию, которая принимает любое количество чисел(не массив)и возвращает их сумму

function calcSum(...rest) {
    let sum = 0;
    
    for (let i = 0; i < rest.length; i++) {
        sum = +sum + +rest[i];
    }
    return sum;
}

console.log(calcSum(1, 2, 3, 4, 5));