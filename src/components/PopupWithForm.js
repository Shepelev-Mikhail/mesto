import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, callbackSubmitForm) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
    this._callbackSubmitForm = callbackSubmitForm;
    this._popupInputs = this._popup.querySelectorAll('.popup__input');
  };

  // получение значений полей
  getInputValues() {
    let data = {};
    if (this._popupInputs?.length) {
      this._popupInputs.forEach((input) => {
        data[input.getAttribute('name')] = input.value;
      });
    };

    return data;
  };

  //изменение колбэка для попапа аватара
  changeSubmitForm(newCallbackSubmitForm) {
    this._callbackSubmitForm = newCallbackSubmitForm
  }

  // установка значений полей
  setInputValues(data) {
    if (this._popupInputs?.length) {
      this._popupInputs.forEach((input) => {
        const attr = input.getAttribute('name');

        if (data[attr]) {
          input.value = data[attr];
        }
      });
    };
  };

  // слушатель клик, оверлей, сабмит
  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();

      const dataInputs = this.getInputValues();
      this._callbackSubmitForm(evt, dataInputs);
    });
  };

  // закрыть попап с ресетом
  close() {
    super.close();

    this._form.reset();
  };
};