export const popupViewImage = document.querySelector('.popup_view-image');
export const imagePopupViewImage = popupViewImage.querySelector('.popup__image');
export const captionPopupViewImage = popupViewImage.querySelector('.popup__caption');

export const openPopup = (currentPopup) => {
  currentPopup.classList.add('popup_opened');
  document.addEventListener('keydown', pressEscape);
};

export const pressEscape = (evt) => {
  if (evt.key === 'Escape') {
    const popupOpen = document.querySelector('.popup_opened');
    closePopup(popupOpen);
  };
};

export const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', pressEscape);
};
