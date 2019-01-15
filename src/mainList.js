export default class ListBinding {
  constructor(element) {
      this.listElement = element;
      this.textList = [
          {   id: 1,
              title: "Концерт Depeche Mode",
              description: "Описание концерта здесь",
              price: 300,
              type: "concert",
              highItem: true
          },
          {
              id: 2,
              title: "Выставка Модильяни",
              description: "Описание выставки здесь",
              price: 200,
              type: "exhibition",
              highItem: false
          }
      ],
      this.trigger = false
  }

  /* Makes an <li>obj</li> element/tag */
  static createListItem ({ id, title, description, price, type, highItem }) {
      const li = document.createElement('li');
      const h1 = document.createElement('h1');
      const p = document.createElement('p');
      const span = document.createElement('span');
      const checkbox = document.createElement('input');

      h1.textContent = title;
      p.textContent = description;
      span.textContent = `${price} руб.`;

      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('class', 'c-checkbox');
      checkbox.value = id;
      if (highItem) {
        checkbox.setAttribute('checked', '');
      }


      li.appendChild(h1)
      li.appendChild(p)
      li.appendChild(span)
      li.appendChild(checkbox)

      return li;
  }

  update() {
      /* Remove all existing <li> elements/tags */
      while (this.listElement.firstChild) {
          this.listElement.removeChild(this.listElement.firstChild);
      }
      /* Fill <ul>/<ol> tag with <li> */
      for (const text of this.textList) {
          this.listElement.appendChild(ListBinding.createListItem(text));
      }
  }

  add(obj) {
      this.textList.push(obj);
      this.update();
  }

  remove(index) {
      this.textList.splice(index, 1);
      this.update();
  }

  sortPrice() {
      if (this.trigger) {
          this.textList.sort((itemA, itemB) => itemB.price - itemA.price)
      } else {
          this.textList.sort((itemA, itemB) => itemA.price - itemB.price)
      }
      this.update()
      this.trigger = !this.trigger
  }

  sortType(type) {
    const firstArray = [], lastArray = []

    this.textList.forEach(item => {
        if (item.type === type) {
            firstArray.push(item)
        } else {
            lastArray.push(item)
        }
    })

    this.textList = firstArray.concat(lastArray);

    //   this.textList = this.textList.map(i => (~i.type.indexOf(type)))
    this.update()
  }

  setHighTextList(id, chekced) {
    this.textList.map(item => {
        if (item.id == id) {
            item.highItem = chekced;
        }
    })
    this.update();
  }

  showHighTextList() {
    const data = this.textList.filter(item => item.highItem === true)
    return data;
  }

}
