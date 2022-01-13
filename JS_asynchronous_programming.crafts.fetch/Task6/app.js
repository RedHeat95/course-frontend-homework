// Задача №6
// Дополнить задание 5. Добавить инпут и кнопку Поиск. Сделать так, чтобы по нажатию на кнопку поиска списке оставались только те карточки, которые соответствуют введенному тексту (фильтрацию проводить по имени, телефону, email).

let input = document.createElement('input');
let button = document.createElement('button');
let divSearch = document.createElement('div');

button.classList.add('button');
divSearch.classList.add('divSearch');

button.innerHTML = 'Поиск';

divSearch.append(input);
divSearch.append(button);
document.body.append(divSearch);

button.addEventListener('click', (event) => {
    let str = input.value;
    let url = fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((value) => {    
        // console.log(value);
        value.filter(item => {
            if (item.username.toLowerCase().includes(str.toLowerCase()) || item.phone.includes(str.toLowerCase()) || item.email.includes(str.toLowerCase())) {

            let div = document.createElement('div');
            div.id = '1';
            document.body.append(div);

            div.append('Имя: ' + item.username + ' / ');
            div.append('Телефон: ' + item.phone + ' / ');
            div.append('Почта: ' + item.email);      

            }

        });

    }).catch((error) => console.log(error));

    input.value = '';
});