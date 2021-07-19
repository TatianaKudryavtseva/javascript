// Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

let basket = [['item1', 100], ['item2', 200],['item3', 600]]; // [название, цена]

function countBasketPrice(arr) {
    let total = 0
    for (var i = 0; i < arr.length; i++) {
        total += basket[i][1]
    }
    return total
}

console.log(countBasketPrice(basket))