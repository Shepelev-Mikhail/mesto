import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
  constructor(popupSelector, callbackSubmitForm) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
    this._callbackSubmitForm = callbackSubmitForm;
  };

  open(data, element) {
    this._data = data;
    this._element = element;

    super.open();
  };

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();

      this._callbackSubmitForm(evt, this._data, this._element);
      this.close();
    });
  };
};