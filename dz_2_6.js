// Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции.
// В зависимости от переданного значения операции выполнить одну из арифметических операций
// (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).

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
        return 'На ноль делить нельзя';
    }
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'сложение': return sum_fun(arg1, arg2);
        case 'вычитание': return sub_fun(arg1, arg2);
        case 'умножение': return multi_fun(arg1, arg2);
        case 'деление': return div_fun(arg1, arg2);
    }
}

c = mathOperation (4, 6, 'сложение');
d = mathOperation (4, 6, 'вычитание');
e = mathOperation (4, 6, 'умножение');
f = mathOperation (4, 6, 'деление');
console.log(c);
console.log(d);
console.log(e);
console.log(f);