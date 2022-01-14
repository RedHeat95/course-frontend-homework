// Задача №9
// Сделать запрос альбомов при помощи fetch на адрес https://jsonplaceholder.typicode.com/albums, Отобразить список альбомов и сделать там, чтобы по нажатию на альбом вместа списка альбомов отобразились фотографии, которые относяться к этому альбому(https://jsonplaceholder.typicode.com/photos). В списке альбомов добавить кнопку Назад, по нажатию на которую переходим обратно на список альбомов. Вывести в html внутри div с id = 4

let btn = document.createElement('button');
document.body.append(btn);
btn.innerHTML = 'Назад';

let div = document.createElement('div');
div.id = '4';  
document.body.append(div);

let url = fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then(value => {        
        value.forEach(item => {   
            let newDiv = document.createElement('div');            
            div.append(newDiv); 
            newDiv.append(' ' + item.id + ')' + ' ' + item.title);

            newDiv.addEventListener('click', (event) => {
                div.innerHTML = '';

                if (event.target.textHTML = item.title) {
                    let url2 = fetch('https://jsonplaceholder.typicode.com/photos')
                        .then(response => response.json())
                        .then(value => { 
                            value.forEach(el => {
                                if (item.userId === el.albumId) {
                                    let img = document.createElement('img');
                                    div.append(img);
                                    img.src = el.url;
                                }
                            });
                        }).catch((error) => console.log(error));
                }
            }); 
        });
    }).catch((error) => console.log(error));

btn.addEventListener('click', () => {
    location.reload();
});