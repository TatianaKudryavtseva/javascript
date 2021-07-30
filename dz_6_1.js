let catalog = [
    {   id: 'sv4yt',
        name: 'Стол',
        cost: 500
    },
   {    id: 'l3ihd',
        name: 'Стул',
        cost: 300
    },
    {   id: 'spm9f',
        name: 'Комод',
        cost: 750
}
]

let basket = [];

function create_catalog() {
    let products = document.getElementById('catalog');
    for (let i = 0; i < catalog.length; i++) {
        let new_div = document.createElement('div')
        products.appendChild(new_div);
        let product = catalog[i]
        new_div.innerHTML = product.name + ' стоимость ' + product.cost
        let new_button = document.createElement('button')
        products.appendChild(new_button)
        new_button.innerHTML = 'Купить'
        new_button.setAttribute('class', product.id)
    }
}

create_catalog()
create_cart();

function total(arr) {
    let sum = 0;
   // arr.forEach(element => sum += element.total_item())
    arr.forEach(element => sum += element.cost * element.quantity)
    return sum;
}

function add_to_cart () {
    let add_item = document.getElementById('catalog')
    add_item.addEventListener('click', function (event) {
        let s = event.target.className
        for (let i = 0; i < catalog.length; i++) {
            if (catalog[i].id === s) {
                basket.push({id: catalog[i].id, name: catalog[i].name, cost: catalog[i].cost, quantity: 1})
                create_cart()
            }
        }
    })
}

function create_cart () {
    if (basket.length === 0) {
        let total_cart = document.getElementById('total')
        let total_tr = document.createElement('div')
        total_cart.appendChild(total_tr)
        total_tr.innerHTML = 'Корзина пуста';
    }
    else {
    let cart = document.getElementById('cart_table')
        let d = basket.length
    for (let i = d - 1; i < d; i++) {
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
        let total_cart = document.getElementById('total')
        total_cart.innerHTML = 'В корзине ' + basket.length + ' товара(ов) на общую сумму ' + total(basket) + ' руб.';
    }

}

add_to_cart();
