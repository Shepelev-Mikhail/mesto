export class Card {
  constructor(data, cardTemplateSelector, handleCardClick, handleDeleteClick, handleLikeClick) {
    this._template = document.querySelector(cardTemplateSelector).content.querySelector('.card');
    this._data = data;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
  };

  // удаление карточки
  handleDelete() {
    this._newCard.remove();
    this._newCard = null;
  };

  // добавление обработки
  _addListeners() {
    this._deleteButton.addEventListener('click', () => {
      this._handleDeleteClick(this._data._id);
    });

    this._likeButton.addEventListener('click', () => {
      this._handleLikeClick(this._data._id);
    });

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._data)
    });
  };

  isLiked() {
    const userHasLikedCard = this._data.likes.find(user => user._id === this._data.userId);

    return userHasLikedCard
  };

  //поставить, убрать лайк
  setLikes(newLike) {
    this._data.likes = newLike
    const likeCounter = this._newCard.querySelector('.card__like-counter');
    likeCounter.textContent = this._data.likes.length;

    if (this.isLiked()) {
      this._handleAddLike();
    } else {
      this._handleRemoveLike();
    }
  };

  _handleAddLike = () => {
    this._likeButton.classList.add('card__like_active');
  };

  _handleRemoveLike = () => {
    this._likeButton.classList.remove('card__like_active');
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

    this.setLikes(this._data.likes);

    if (this._data.userId !== this._data.ownerId) {
      this._deleteButton.style.display = 'none';
    }

    this._addListeners();

    return this._newCard;
  };
};