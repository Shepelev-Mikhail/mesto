import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, callbackSubmitForm) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
    this._callbackSubmitForm = callbackSubmitForm;
  };

  // получение значений полей
  _getInputValues() {
    let data = {};
    const popupInputs = this._popup.querySelectorAll('.popup__input');

    if (popupInputs?.length) {
      popupInputs.forEach((input) => {
        data[input.getAttribute('name')] = input.value;
      });
    };

    return data;
  };

  // установка значений полей
  setInputValues(data) {
    const popupInputs = this._popup.querySelectorAll('.popup__input');

    if (popupInputs?.length) {
      popupInputs.forEach((input) => {
        const attr = input.getAttribute('name');
        
        if (data[attr]) {
          input.value = data[attr];
        }
      });
    };
  };

  // слушатель клик, оверлей, сабмит
  setEventListeners() {
    this._popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup__close-button') || (evt.target === evt.currentTarget)) {
        this.close();
      };
    });

    this._form.addEventListener('submit', (evt) => {
      const dataInputs = this._getInputValues();
      this._callbackSubmitForm(evt, dataInputs);
      this.close();
    });
  };

  // закрыть попап с ресетом
  close() {
    this._popup.classList.remove('popup_opened');
    this._form.reset();
    document.removeEventListener('keydown', this._handleEscClose);
  };
};