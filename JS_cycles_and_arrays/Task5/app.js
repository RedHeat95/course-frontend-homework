// Задача №5
// Создайте 2 массива с разной длинной. Необходимо написать код,который создаёт массив элементов представляющих собой сумму соответствующих элементов заданных массивов.

let firstArr = [1, 2, 3, 4, 5];
let secondArr = [6, 7, 8, 9, -10, 11];

function Arr(firstArr, secondArr) {
    let newArr = [];

    if (firstArr.length < secondArr.length) {
        for (let i = 0; i < firstArr.length; i++) {
            newArr.push(+firstArr[i] + +secondArr[i]);
        } 

    } else {
        for (let i = 0; i < secondArr.length; i++) {
            newArr.push(+firstArr[i] + +secondArr[i]);
        }
    }
    return newArr;
}

console.log(Arr(firstArr, secondArr));