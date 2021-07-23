let basket = {
    item_1: {
        id: 'sv4yt',
        name: 'item1',
        number: 2,
        cost: 500,
        total_item () {
            return this.cost * this.number
        }
    },
    item_2: {
        id: 'l3ihd',
        name: 'item1',
        number: 1,
        cost: 300,
        total_item () {
            return this.cost * this.number
        }
    },
    item_3: {
        id: 'spm9f',
        name: 'item1',
        number: 3,
        cost: 750,
        total_item () {
            return this.cost * this.number
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

console.log(basket.total())
