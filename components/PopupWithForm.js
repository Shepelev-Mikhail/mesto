import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, callbackSubmitForm) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
    this._callbackSubmitForm = callbackSubmitForm;
  }

  _getInputValues() {
    let data = {};
    const popupInputs = this._popup.querySelectorAll('.popup__input');

    if (popupInputs?.length) {
      popupInputs.forEach((input) => {
        data[input.getAttribute('name')] = input.value;
      });      
    }
    
    return data;    
  }

  setEventListeners() {
    this._popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup__close-button') || (evt.target === evt.currentTarget)) {
        this.close();
      };
    });

    this._form.addEventListener('submit', (evt) => {
      const dataInputs = this._getInputValues();
      this._callbackSubmitForm(evt, dataInputs);
    });
  }

  close() {
    this._popup.classList.remove('popup_opened');
    this._form.reset();
    document.removeEventListener('keydown', this._handleEscClose);
  }
}