require('./sass/main.scss')
require('./index.html')


import ListBinding from './mainList'
import FilterListBinding from './filterList'

const myList = document.getElementById('myList');
const myFilterList = document.getElementById('myListFilter')


const listBinding = new ListBinding(myList);
const filterListBinding = new FilterListBinding(myFilterList);

// Helps
const obj = {
    id: 3,
    title: "Выставка ВОВ",
    description: "Описание выставки здесь",
    price: 50,
    type: "exhibition",
    highItem: false,
}

listBinding.add(obj)


// DOM Modify
document.getElementById('sort-price').onclick = () => {
    console.log('tap sort-price')
    listBinding.sortPrice()
  };

document.addEventListener('change', evt => {
    const el = evt.target;
    const val = el.value|0; // to int
    if (val) {
        console.log('tap checkbox')
        listBinding.setHighTextList(val, el.checked)
    } else {
        console.log('tap select')
        listBinding.sortType(el.value)
    }
}, false);

document.getElementById('show').onclick = () => {
    console.log('tap show')
    const data = listBinding.showHighTextList();
    filterListBinding.add(data);

    if (myList.style.display === 'block') {
        myList.style.display = 'none';
        myFilterList.style.display = 'block';
    } else {
        myList.style.display = 'block';
        myFilterList.style.display = 'none';
    }
}