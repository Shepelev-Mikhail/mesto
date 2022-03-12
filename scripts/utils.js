export const popupViewImage = document.querySelector('.popup_view-image');
export const imagePopupViewImage = popupViewImage.querySelector('.popup__image');
export const captionPopupViewImage = popupViewImage.querySelector('.popup__caption');

// открытие попапа
export const openPopup = (currentPopup) => {
  currentPopup.classList.add('popup_opened');
  document.addEventListener('keydown', pressEscape);
};

// нажатие Escape
const pressEscape = (evt) => {
  if (evt.key === 'Escape') {
    const popupOpen = document.querySelector('.popup_opened');
    closePopup(popupOpen);
  };
};

// закрытие попапа
export const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', pressEscape);
};
