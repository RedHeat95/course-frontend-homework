// Задача №3
// Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайной задержкой от 1 до 5 секунд. Пусть каждый промис своим результатом возвращает эту задержку. С помощью Promise.all получите массив результатов, найдите его сумму, выведите на экран.

function randominteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);  
}

let promise1 = new Promise((resolve) => {
    let int = randominteger(1, 5);
    console.log(int);
    setTimeout(() => resolve(int), int * 1000);
}).then(resolve => resolve);

let promise2 = new Promise((resolve) => {
    let int = randominteger(1, 5);
    console.log(int);
    setTimeout(() => resolve(int), int * 1000);
}).then(resolve => resolve);

let promise3 = new Promise((resolve) => {
    let int = randominteger(1, 5);
    console.log(int);
    setTimeout(() => resolve(int), int * 1000);
}).then(resolve => resolve);

Promise.all([promise1, promise2, promise3])
    .then(result => {
        console.log(result);
        console.log(result[0] + result[1] + result[2]);
    });