// Задача №2
// Сделайте промис, внутри которого будет setTimeout в 3 секунды, после которой промис должен зареджектится (то есть выполнится с ошибкой).

let rez = false;

let promiseMistake = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (rez) {
            resolve('success');
        } else {
            reject(new Error('mistake'));
        }        
    }, 3000);
});

promiseMistake.then(
    resolve => console.log(resolve),
    reject => console.log(reject)
);