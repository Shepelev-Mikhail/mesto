export class Section {
  constructor({ items, renderer }, cardContainerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(cardContainerSelector);
  };

  // отрисовка карт
  rendererElements() {
    this._items.forEach((item) => {
      const card = this._renderer(item);
      this.addItem(card);
    });
  };

  // добавление карт в галерею
  addItem = (element) => {
    this._container.prepend(element);
  };
};