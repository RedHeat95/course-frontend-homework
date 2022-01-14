// Задача №1
// Сделайте промис, внутри которого будет setTimeout в 3 секунды, после которой промис должен зарезолвится (то есть выполнится успешно).

let promiseSuccess = new Promise(resolve => {
    setTimeout(() => resolve('success'), 3000);
});

promiseSuccess.then(console.log);