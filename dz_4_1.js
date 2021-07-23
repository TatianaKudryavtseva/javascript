// Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999,
// мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни.
// Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.


function num_to_object(num) {
    let obj = {
        units: 0,
        dozens: 0,
        hundreds: 0
    }
    if (num < 10) {
        obj.units += num;
    }
    else if (num >= 10 && num < 99) {
        obj.units += num % 10;
        obj.dozens += (num - num % 10) / 10;
    }
    else if (num >= 100 && num < 1000) {
        obj.units += num % 10;
        obj.dozens += (num % 100 - num % 10) / 10;
        obj.hundreds += (num - num % 100) / 100;
    }
    return obj;
}

console.log(num_to_object(7));
console.log(num_to_object(98));
console.log(num_to_object(359));
console.log(num_to_object(7494));