let basket = [
    {   id: 'sv4yt',
        name: 'Стол',
        quantity: 2,
        cost: 500,
        total_item () {
            return this.cost * this.quantity
        }
    },
    {   id: 'l3ihd',
        name: 'Стул',
        quantity: 1,
        cost: 300,
        total_item () {
            return this.cost * this.quantity
        }
    },
    {   id: 'spm9f',
        name: 'Комод',
        quantity: 3,
        cost: 750,
        total_item () {
            return this.cost * this.quantity
        }
    }
];

function total(arr) {
    let sum = 0;
    arr.forEach(element => sum += element.total_item())
    return sum;
}


function create_cart () {
    let cart = document.getElementById('cart_table')
    for (let i = 0; i < basket.length; i++) {
        let item = basket[i];
        let new_tr = document.createElement('tr')
        cart.appendChild(new_tr)
        for (let j = 1; j < 4; j++) {
            let new_td = document.createElement('td')
            cart.appendChild(new_td)
            if (j === 1) {
                new_td.innerHTML = item.name
            } else if (j === 2) {
                new_td.innerHTML = item.quantity
            } else if (j === 3) {
                new_td.innerHTML = item.cost
            }
        }
    }
    if (basket.length > 1){
        let total_cart = document.getElementById('total')
        let total_tr = document.createElement('div')
        total_cart.appendChild(total_tr)
        total_tr.innerHTML = 'В корзине ' + basket.length + ' товара(ов) на общую сумму ' + total(basket) + ' руб.';
    }
    else {
        let total_cart = document.getElementById('total')
        let total_tr = document.createElement('div')
        total_cart.appendChild(total_tr)
        total_tr.innerHTML = 'Корзина пуста';
    }
}

create_cart();