// Задача №10
// Написать функцию, которая принимает первым аргументом массив, а вторым любое значение, функция должна вернуть индекс если такое значение есть в массиве и -1 если его нет. (indexOf, findIndex не использовать!)

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ind = 1;

function getMe(arr, ind) {
    
    if (ind <= arr.length) {
        let newArr = arr.find((item, index) => index === ind);
        return console.log(newArr + ` с индексом: ` + ind);
    } else {
        return console.log(-1);
    }
}

getMe(arr, 3);