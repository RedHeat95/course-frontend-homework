// Задача №7
// Фильтр юзеров Создать массив объектов для юзеров. Написать скрипт, который будет на выходе отдавать два массива. Первый с совершеннолетними пользователями, второй с несовершеннолетними.

let users = [
    {name: 'Ivan', age: 18}, 
    {name: 'Petr', age: 12}, 
    {name: 'Sidor', age: 25},
];

function youCan(users) {
    let oldUsers = users.filter(item => item.age >= 18);
    console.log(oldUsers);
    let youngUsers = users.filter(item => item.age < 18);
    console.log(youngUsers);
}

youCan(users)