// С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

let num = 2;
while (num <= 100) {
    var count = 0;
    for (var i = 1; i <= num; i++) {
        if (num % i === 0) {
            count++;
        }
    }
    if (count === 2) {
        console.log(num);
    }
    num++
}


