const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const popup = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup__edit');
const popupAdd = document.querySelector('.popup__add');

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popupClose = document.querySelector('.popup__close-button');
const popupName = document.querySelector('.popup__input_type_name');
const popupDescription = document.querySelector('.popup__input_type_description');

const popupForm = document.querySelector('.popup__form');



function openPopup() {
  popup.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function openPopupEdit() {
  popupName.value = profileTitle.textContent;
  popupDescription.value = profileSubtitle.textContent;
  popupEdit.classList.add('popup__edit_active');
}

function closePopupEdit() {
  popupEdit.classList.remove('popup__edit_active');
}

function openPopupAdd() {
  popupAdd.classList.add('popup__add_active');
}

function closePopupAdd() {
  popupAdd.classList.remove('popup__add_active');
}



function formSubmitHandler(evt) {
  evt.preventDefault();

  profileTitle.textContent = popupName.value
  profileSubtitle.textContent = popupDescription.value

  closePopup();
}

editButton.addEventListener('click', () => {
  openPopup();
  openPopupEdit();
});
addButton.addEventListener('click', () => {
  openPopup();
  openPopupAdd();
});

popupClose.addEventListener('click', () => {
  closePopup();
  closePopupAdd();
  closePopupEdit();
});


popupForm.addEventListener('submit', formSubmitHandler);
