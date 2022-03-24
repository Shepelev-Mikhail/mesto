import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js';
import { UserInfo } from '../components/UserInfo.js';
import { Section } from '../components/Section.js';
import { Popup } from '../components/Popup.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//const gallery = document.querySelector('.gallery');

//const profileTitle = document.querySelector('.profile__title');
//const profileSubtitle = document.querySelector('.profile__subtitle');

const popupProfile = document.querySelector('.popup_profile');
const nameProfilePopup = popupProfile.querySelector('.popup__input_type_name');
const descriptionProfilePopup = popupProfile.querySelector('.popup__input_type_description');

const popupPlace = document.querySelector('.popup_place');
// const namePlacePopup = popupPlace.querySelector('.popup__input_type_place');
// const linkPlacePopup = popupPlace.querySelector('.popup__input_type_link');

const editProfile = document.querySelector('.profile__edit-button');
const addPlace = document.querySelector('.profile__add-button');

// const popups = document.querySelectorAll('.popup');
const popupProfileForm = popupProfile.querySelector('.popup__form');
const popupPlaceForm = popupPlace.querySelector('.popup__form');


//класс Popup
const newPopupPlace = new Popup('.popup_place');
const newPopupProfile = new Popup('.popup_profile');

const newPopupViewImage = new PopupWithImage('.popup_view-image');
newPopupViewImage.setEventListeners();

const newPopupProfileForm = new PopupWithForm('.popup_profile', saveProfile);
newPopupProfileForm.setEventListeners();
newPopupProfileForm.close();

const newPopupPlaceForm = new PopupWithForm('.popup_place', createPlace);
newPopupPlaceForm.setEventListeners();
newPopupPlaceForm.close();

// класс FormValidator
const popupProfileFormValidator = new FormValidator(validationConfig, popupProfileForm);
const popupPlaceFormvalidator = new FormValidator(validationConfig, popupPlaceForm);

popupProfileFormValidator.enableValidation();
popupPlaceFormvalidator.enableValidation();

//класс Section
const section = new Section({items: initialCards, renderer: addCard}, '.gallery');
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


// функция сохранить профиль
function saveProfile(evt, data) {
  evt.preventDefault();

  userInfo.setUserInfo(data.popupName, data.popupDescription);
  newPopupProfile.close();
};

// кнопка создать карточку
function createPlace(evt, data) {
  evt.preventDefault();

  const currData = {
    name: data.popupPlace,
    link: data.popupLink
  };

  const section = new Section({items: [currData], renderer: addCard}, '.gallery');
  section.rendererElements();
  
  newPopupPlace.close();
};


// клик на кнопку редактирования
editProfile.addEventListener('click', () => {
  popupProfileFormValidator.resetForm();

  const userInfoContent = userInfo.getUserInfo();
  
  nameProfilePopup.value = userInfoContent.name;
  descriptionProfilePopup.value = userInfoContent.description;

  popupProfileFormValidator.checkButtonValidity();

  newPopupProfile.open();
  newPopupProfile.setEventListeners();
});

// клик на кнопку +
addPlace.addEventListener('click', () => {
  popupPlaceFormvalidator.resetForm();
  popupPlaceFormvalidator.checkButtonValidity();

  newPopupPlace.open();
  newPopupPlace.setEventListeners();
});

//popupProfileForm.addEventListener('submit', saveProfile);
//popupPlaceForm.addEventListener('submit', createPlace);



