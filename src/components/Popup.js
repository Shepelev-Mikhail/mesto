export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  };

  // открыть попап
  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  };

  // закрыть попап
  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  };

  // нажатие ESC
  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    };
  };

  // обработчик клика на крестик и оверлей
  setEventListeners() {
    this._popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup__close-button') || (evt.target === evt.currentTarget)) {
        this.close();
      };
    });
  };
};