export class Section {
  constructor({items, renderer}, cardContainerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(cardContainerSelector);
  }

  rendererElements() {
    this._items.forEach((item) => {
      this._renderer(item, this.addItem);
    })
  }

  addItem = (element) => {
    this._container.prepend(element);
  }
}