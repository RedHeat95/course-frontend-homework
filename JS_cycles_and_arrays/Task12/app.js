// Задача №12
// Написать функцию сравнения двух массивов, которая возвращает true или false в зависимости от того, одинаковые у них элементы или нет.

function checkIsEqaul(firstArr, secondArr) {
    if (firstArr.length !== secondArr.length) {
        return false;
    } else if (firstArr.length === secondArr.length) {
        for(let i = 0; i < firstArr.length; i++){
            if (firstArr[i] !== secondArr[i]) {
                return false;
            }
        }  
        return true;
    }    
}

console.log(checkIsEqaul([1, 2, 3], [1, 2, 3]));
console.log(checkIsEqaul([1, 2, 3], [1, 2, 3, 4]));
console.log(checkIsEqaul([1, 2, 3], [1, '2', 3]));