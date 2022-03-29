import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imagePopupViewImage = this._popup.querySelector('.popup__image');
    this._captionPopupViewImage = this._popup.querySelector('.popup__caption');
  };

  // открыть попап с заполнением
  open = (data) => {
    this._imagePopupViewImage.src = data.link;
    this._imagePopupViewImage.alt = data.name;
    this._captionPopupViewImage.textContent = data.name;

    super.open();
  };
};