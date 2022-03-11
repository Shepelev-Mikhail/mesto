import {imagePopupViewImage, captionPopupViewImage, popupViewImage, openPopup} from './utils.js';

export class Card {
  constructor(data, cardTemplateSelector) {
    this._template = document.querySelector(cardTemplateSelector).content;
    this._name = data.name;
    this._link = data.link;
  }

  // лайк карточки
  _handleToggleLike = () => {
    this._likeButton.classList.toggle('card__like_active');
  };

  // удаление карточки
  _handleDelete = () => {
    this._newCard.remove();
  };

  // попап просмотра карточки
  _handleOpenImage = () => {
    //const card = event.target.closest('.card');
    const titleCard = this._newCard.querySelector('.card__title').textContent;
    const cardImageLink = this._newCard.getAttribute('src');

    imagePopupViewImage.setAttribute('src', cardImageLink);
    imagePopupViewImage.setAttribute('alt', titleCard);
    captionPopupViewImage.textContent = titleCard;

    openPopup(popupViewImage);
  };

  // добавляем слушатели события клик
  _addListeners () {
    this._deleteButton.addEventListener('click', this._handleDelete);
    this._likeButton.addEventListener('click', this._handleToggleLike);
    this._cardImage.addEventListener('click', this._handleOpenImage);
  };

  // создfние карточек
  createCard (name, link, position) {
    // нашли
    this._newCard = this._template.cloneNode(true);
    //const cardImage = this._newCard.querySelector('.card__image');
    this._likeButton = this._newCard.querySelector('.card__like');
    this._deleteButton = this._newCard.querySelector('.card__delete');
    this._cardImage = this._newCard.querySelector('.card__image');

    // заполнили
    this._newCard.querySelector('.card__title').innerText = this._name;
    this._cardImage.setAttribute('src', this._link);
    this._cardImage.setAttribute('alt', this._name);

    // слушатели
    this._addListeners();

    return this._newCard;
  };
}
