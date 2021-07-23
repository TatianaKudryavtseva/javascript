// Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
// Обязательно использовать оператор return.

function sum_fun (a, b) {
    return a + b;
}

function sub_fun (a, b) {
    return a - b;
}

function multi_fun(a, b) {
    return a * b;
}

function div_fun(a, b) {
    if (b !== 0) {
        return a / b;
    }
    else {
        return 'На ноль делить нельзя'
    }
}

c = sum_fun(10, 8)
d = sub_fun(5, 3)
e = multi_fun(12, 4)
f = div_fun(4,0)
console.log(c)
console.log(d)
console.log(e)
console.log(f)