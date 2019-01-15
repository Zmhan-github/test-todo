export default class FilterListBinding {
  constructor(element) {
      this.listElement = element;
      this.textList = [];
  }

  /* Makes an <li>obj</li> element/tag */
  static createListItem ({ id, title, description, price, type, highItem }) {
      const li = document.createElement('li');
      const h1 = document.createElement('h1');
      const p = document.createElement('p');
      const span = document.createElement('span');

      h1.textContent = title;
      p.textContent = description;
      span.textContent = `${price} руб.`;


      li.appendChild(h1)
      li.appendChild(p)
      li.appendChild(span)

      return li;
  }

  update() {
      /* Remove all existing <li> elements/tags */
      while (this.listElement.firstChild) {
          this.listElement.removeChild(this.listElement.firstChild);
      }
      /* Fill <ul>/<ol> tag with <li> */
      for (const text of this.textList) {
          this.listElement.appendChild(FilterListBinding.createListItem(text));
      }
  }

  add(arr) {
      this.textList = arr;
      this.update();
  }

}
