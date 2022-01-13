// Задача №4
// Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users, Отфильтровать массив пользователей, чтобы остались только пользователи с четными id.

let arr = [];

let url = fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((value) => {
        value.forEach(item => {
            if (item.id % 2 === 0) {
                return arr.push(item);                
            }
        });
    }).catch((error) => console.log(error));

console.log(arr);