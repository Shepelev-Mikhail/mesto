export class Card {
  constructor(data, cardTemplateSelector, handleCardClick) {
    this._template = document.querySelector(cardTemplateSelector).content.querySelector('.card');
    this._data = data;
    this._handleCardClick = handleCardClick;
  };

  // лайк карточки
  _handleToggleLike = () => {
    this._likeButton.classList.toggle('card__like_active');
  };

  // удаление карточки
  _handleDelete = () => {
    this._newCard.remove();
    this._newCard = null;
  };

  // добавление обработки
  _addListeners() {
    this._deleteButton.addEventListener('click', this._handleDelete);
    this._likeButton.addEventListener('click', this._handleToggleLike);
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._data)
    });
  };

  // создание карточек
  createCard() {
    this._newCard = this._template.cloneNode(true);
    this._likeButton = this._newCard.querySelector('.card__like');
    this._deleteButton = this._newCard.querySelector('.card__delete');
    this._cardImage = this._newCard.querySelector('.card__image');

    this._newCard.querySelector('.card__title').innerText = this._data.name;
    this._cardImage.setAttribute('src', this._data.link);
    this._cardImage.setAttribute('alt', this._data.name);

    this._addListeners();

    return this._newCard;
  };
};
