import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open = (data) => {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);

    const imagePopupViewImage = this._popup.querySelector('.popup__image');
    const captionPopupViewImage = this._popup.querySelector('.popup__caption');

    imagePopupViewImage.src = data.link;
    imagePopupViewImage.alt = data.name;
    captionPopupViewImage.textContent = data.name;
  }
}