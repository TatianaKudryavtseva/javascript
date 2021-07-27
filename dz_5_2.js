let basket = {
    item_1: {
        id: 'sv4yt',
        name: 'item1',
        quantity: 2,
        cost: 500,
        total_item () {
            return this.cost * this.quantity
        }
    },
    item_2: {
        id: 'l3ihd',
        name: 'item2',
        quantity: 1,
        cost: 300,
        total_item () {
            return this.cost * this.quantity
        }
    },
    item_3: {
        id: 'spm9f',
        name: 'item3',
        quantity: 3,
        cost: 750,
        total_item () {
            return this.cost * this.quantity
        }
    },
    total() {
        let sum = 0;
        let items = Object.keys(this);
        for (let i = 0; i < (items.length - 1); i++) {
            sum += this[items[i]].total_item();
        }
        return sum;
    }
};

function create_cart () {
    let cart = document.getElementById('cart_table')
    let items = Object.keys(basket)
    for (let i = 0; i < (items.length - 1); i++) {
        let item = basket[items[i]];
        let new_tr = document.createElement('tr')
        cart.appendChild(new_tr)
        for (let j = 0; j < 4; j++) {
            let new_td = document.createElement('td')
            cart.appendChild(new_td)
            if (j === 0) {
                new_td.innerHTML = item.id
            } else if (j === 1) {
                new_td.innerHTML = item.name
            } else if (j === 2) {
                new_td.innerHTML = item.quantity
            } else if (j === 3) {
                new_td.innerHTML = item.cost
            }
        }
    }
    if (items.length > 1){
        let total_cart = document.getElementById('total')
        let total_tr = document.createElement('div')
        total_cart.appendChild(total_tr)
        total_tr.innerHTML = 'В корзине ' + items.length + ' товара(ов) на общую сумму ' + basket.total() + ' руб.';
    }
    else {
        let total_cart = document.getElementById('total')
        let total_tr = document.createElement('div')
        total_cart.appendChild(total_tr)
        total_tr.innerHTML = 'Корзина пуста';
    }
}

create_cart();