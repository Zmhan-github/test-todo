require('./sass/main.scss')
require('./index.html')

import ListBinding from './mainList'

const myList = document.getElementById('myList');
const myFilter = document.getElementById('myFilter');

const listBinding = new ListBinding(myList, myFilter);

const obj = {
    title: "Выставка ВОВ",
    description: "Описание выставки здесь",
    price: 50,
    type: "exhibition",
}

listBinding.add(obj)



document.getElementById('sort-price').onclick = () => {
    console.log('tap')
    listBinding.sortPrice()
};
