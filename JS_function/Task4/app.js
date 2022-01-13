// Задача №4
// Напишите функцию, которая разделит массив на части заданного размера и вернет массив элементами которого являются эти части. Пример функции: splitArray([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]

const arr = [1, 2, 3, 4, 5];
let sep = 2;

function splitArray(arr, sep) {
    let newArr = [];
    for (let i = 0; i < arr.length / sep; i++) {
        newArr[i] = arr.slice((i * sep), (i * sep) + sep);
    }
    return newArr;
}

console.log(splitArray(arr, sep));