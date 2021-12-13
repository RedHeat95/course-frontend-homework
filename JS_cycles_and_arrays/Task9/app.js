// Задача №9
// Напишите код, который проверит является строка полиндромом (слово, которое с обеих сторон читается одинаково, например РЕПЕР, ШАЛАШ)

let word = '';
let word1 = 'ШАЛАШ';
let word2 = 'РЕПЕР';
let word3 = 'ШКОЛА';

function palindrom(word) {  

    if (word.length === 0) {
        return console.log('Пусто');
    }

    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] != word[word.length -1 - i]) {
            return console.log(word + ' это не палидром');       
        } 
    } 
    return console.log(word + ' это палидром');
}   

palindrom(word);
palindrom(word1);
palindrom(word2);
palindrom(word3);