// Задача №8
// Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/albums/1/photos, вывести фотографии, используя тег img. В качестве src для img использовать поле url в объекте фото 
// {
//   "albumId": 1,
//   "id": 4,
//   "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
//   "url": "https://via.placeholder.com/600/d32776",
//   "thumbnailUrl": "https://via.placeholder.com/150/d32776"
// },
// Дополнительно сделать, чтобы по нажатию на картинку картинка увеличивалась в размерах, повторное нажатие вернет картинку к исходному размеру. Вывести в html внутри div с id = 3

let div = document.createElement('div');
div.id = '3';
document.body.append(div);

let url = fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
    .then((responce) => responce.json())
    .then(value => {
        // console.log(value);
        value.forEach(item => {
            let img = document.createElement('img'); 
            img.classList.add('normal');           
            div.append(img);            
            img.src = item.url; 

            img.addEventListener('click', (event) => {
                if (event.target.className === 'normal') {            
                    img.classList.add('big');                      
                    img.classList.remove('normal');          
                    img.style.width = '1200px';

                } else if (event.target.className === 'big') {
                    img.classList.add('normal');           
                    img.classList.remove('big');
                    img.style.width = '600px';
                }        
            });
        });        
    }).catch((error) => console.log(error));