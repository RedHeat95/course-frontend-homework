// Задача №5
// Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users, вывести список карточек пользователей, отобразить имя, телефон и остальную информацию каждого пользователя. Вывести в html внутри div с id = 1.

let url = fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((value) => {
        value.forEach(item => {
            // console.log(value);
            let div = document.createElement('div');
            div.id = '1';
            document.body.append(div);
            div.append('Имя: ' + item.username + ' / ');
            div.append('Телефон: ' + item.phone + ' / ');
            div.append('Почта: ' + item.email);                     
        });
    }).catch((error) => console.log(error));