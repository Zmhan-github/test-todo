export default class ListBinding {
  constructor(element, selectElemet) {
      this.listElement = element;
      this.listElementFilter = selectElemet;
      this.textList = [
          {
              title: "Концерт Depeche Mode",
              description: "Описание концерта здесь",
              price: 300,
              type: "concert",
          },
          {
              title: "Выставка Модильяни",
              description: "Описание выставки здесь",
              price: 200,
              type: "exhibition",
          }
      ],
      this.trigger = false
  }

  /* Makes an <li>obj</li> element/tag */
  static createListItem ({ title, description, price, type }) {
      const li = document.createElement('li');
      const h1 = document.createElement('h1');
      const p = document.createElement('p');
      const span = document.createElement('span');

      li.setAttribute('data-type', type);
      h1.textContent = title;
      p.textContent = description;
      span.textContent = `${price} руб.`;

      li.appendChild(h1)
      li.appendChild(p)
      li.appendChild(span)

      return li;
  }

  static createListItemFilter({ type }) {
    // Filter
    const option = document.createElement('option');
    option.setAttribute('value', type);
    option.textContent = type;
    return option;
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

    this.updateFilter()
  }

  updateFilter() {
    /* Remove all existing <li> elements/tags */
    while (this.listElementFilter.firstChild) {
        this.listElementFilter.removeChild(this.listElementFilter.firstChild);
    }

    /* Fill <ul>/<ol> tag with <li> */
    for (const text of this.textList) {
        this.listElementFilter.appendChild(ListBinding.createListItemFilter(text));
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
          this.update()
          this.trigger = !this.trigger
      } else {
          this.textList.sort((itemA, itemB) => itemA.price - itemB.price)
          this.update()
          this.trigger = !this.trigger
      }
  }
}
