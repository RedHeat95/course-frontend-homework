// Задача №8
// Необходимо создать массив из 15 элементов. В массиве обязательно должны быть одинаковые значения. Напишите код, который уберет эти дубликаты из созданного массива.

// Это функция создаёт массив случайных чисел указаной длины
function randominteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);  
}
function randomer(length, min, max) {
    let randomnamder = [];
    for (let i = 1; i <= length; i++) {
        randomnamder.push(randominteger(min, max)); 
    }
    return randomnamder
} 
let arr = randomer(15, 1, 10);
console.log(arr);

// Объект set может содержать в себе только уникальные элементы, используем метод new Set()
let newArr1 = Array.from(new Set(arr)); // Используем оператор Array.from() для преобразования в массив
console.log(newArr1);

let newArr2 = arr.filter((item, index) => {
    return arr.indexOf(item) === index;
});
console.log(newArr2);