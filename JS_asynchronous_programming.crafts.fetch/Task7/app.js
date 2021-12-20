// Задача №7
// Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users/${userId}/todos, userId получить при помощи prompt. Вывести todo list пользователя, отобразить текст тудушки и индикатор выполнена она или нет (чекбокс). Вывести в html внутри div с id = 2

let userId = prompt('Введите номер ID');

let url = fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
    .then((response) => response.json())
    .then((value) => {
        
        value.forEach(item => {            
            let div = document.createElement('div');
            div.id = '2';
            let input = document.createElement('input');
            input.type = 'checkbox';
            div.append(input);
            document.body.append(div);
            input.append(item.completed);            
            div.append(' - ' + item.title);

            if (item.completed === true) {
               input.checked = true;               
            }  

        });

    }).catch((error) => console.log(error));