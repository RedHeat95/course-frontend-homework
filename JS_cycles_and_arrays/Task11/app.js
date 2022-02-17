// Задача №11
// Написать функцию search, которая принимает первым аргументом массив имен
// и любую произвольную строку. Функция должна отфильтровать массив в зависимости от строки (в независимости от регистра). Например:
// search([‘Ivan’, ‘Petr’, ‘Sidor’], 'si') -> ['Sidor']
// search([‘Ivan’, ‘Petr’, ‘Sidor’], 'i') -> [‘Ivan’,'Sidor']
// search([‘Ivan’, ‘Petr’, ‘Sidor’, 'Petric'], 'eTr') -> [‘Petr’,'Petric']
// search([‘Ivan’, ‘Petr’, ‘Sidor’, 'Petric'], 'eTrooo') -> []

const searchArr = ["Ivan", "Petr", "Sidor", "Petric"];

function search(arr, searchText) {
  let resultArr = arr.reduce((prev, curr) => {
    if (curr.toLowerCase().includes(searchText.toLowerCase())) {
      prev.push(curr);
      // return prev.concat(curr); // Или так
    }
    return prev;
  }, []);

  return resultArr;
}

console.log(search(searchArr, "si"));
console.log(search(searchArr, "i"));
console.log(search(searchArr, "eTr"));
console.log(search(searchArr, "eTrooo"));
