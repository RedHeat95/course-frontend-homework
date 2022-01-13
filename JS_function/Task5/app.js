// Задача №5
// Написать функцию, которая приобразуем любую строку в строку написанную кебаб кейсом (все буквы с маленькой буквы и на месте пробелов - тире) Например: 'Hello World' -> 'hello-world'; 'Hello dear hell' -> 'hello-dear-hell'

let str = 'Hello World';
let str2 = 'Hello dear hell';

function inter(str) {
    let newStr = str.toLowerCase().split(' ').join('-');
    return newStr;
}

console.log(inter(str));
console.log(inter(str2));