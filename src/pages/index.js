import { validationConfig, initialCards, popupProfileForm, popupPlaceForm, editProfile, addPlace } from '../components/constants.js';
import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js';
import { UserInfo } from '../components/UserInfo.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';

import './index.css';

//класс Popup
const newPopupViewImage = new PopupWithImage('.popup_view-image');
newPopupViewImage.setEventListeners();

const newPopupProfileForm = new PopupWithForm('.popup_profile', saveProfile);
newPopupProfileForm.setEventListeners();

const newPopupPlaceForm = new PopupWithForm('.popup_place', createPlace);
newPopupPlaceForm.setEventListeners();

// класс FormValidator
const popupProfileFormValidator = new FormValidator(validationConfig, popupProfileForm);
const popupPlaceFormvalidator = new FormValidator(validationConfig, popupPlaceForm);

popupProfileFormValidator.enableValidation();
popupPlaceFormvalidator.enableValidation();

//класс Section
const section = new Section({ items: initialCards, renderer: addCard }, '.gallery');
section.rendererElements();

// класс Card
function addCard(data, callback) {
  if (data.name && data.link) {
    const objCard = new Card(data, '.template', newPopupViewImage.open);
    const card = objCard.createCard();

    callback(card);
  };
};

//класс UserInfo
const userInfo = new UserInfo({
  nameSelector: '.profile__title',
  descriptionSelector: '.profile__subtitle'
});

// колбэк сохранение профиля
function saveProfile(evt, data) {
  evt.preventDefault();

  userInfo.setUserInfo(data);
};

// колбэк создание карточки
function createPlace(evt, data) {
  evt.preventDefault();

  const section = new Section({ items: [data], renderer: addCard }, '.gallery');
  section.rendererElements();
};

// клик на кнопку редактирования
editProfile.addEventListener('click', () => {
  popupProfileFormValidator.resetForm();

  newPopupProfileForm.setInputValues(userInfo.getUserInfo());

  popupProfileFormValidator.checkButtonValidity();

  newPopupProfileForm.open();
});

// клик на кнопку +
addPlace.addEventListener('click', () => {
  popupPlaceFormvalidator.resetForm();
  popupPlaceFormvalidator.checkButtonValidity();

  newPopupPlaceForm.open();
});