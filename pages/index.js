import { openPopup, closePopup } from '../components/utils.js';
import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js';
import { UserInfo } from '../components/UserInfo.js';

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

const gallery = document.querySelector('.gallery');

//const profileTitle = document.querySelector('.profile__title');
//const profileSubtitle = document.querySelector('.profile__subtitle');

const popupProfile = document.querySelector('.popup_profile');
const nameProfilePopup = popupProfile.querySelector('.popup__input_type_name');
const descriptionProfilePopup = popupProfile.querySelector('.popup__input_type_description');

const popupPlace = document.querySelector('.popup_place');
const namePlacePopup = popupPlace.querySelector('.popup__input_type_place');
const linkPlacePopup = popupPlace.querySelector('.popup__input_type_link');

const editProfile = document.querySelector('.profile__edit-button');
const addPlace = document.querySelector('.profile__add-button');

const popups = document.querySelectorAll('.popup');
const popupProfileForm = popupProfile.querySelector('.popup__form');
const popupPlaceForm = popupPlace.querySelector('.popup__form');

// проверка валидации форм
const popupProfileFormValidator = new FormValidator(validationConfig, popupProfileForm);
const popupPlaceFormvalidator = new FormValidator(validationConfig, popupPlaceForm);

popupProfileFormValidator.enableValidation();
popupPlaceFormvalidator.enableValidation();

// добавление карточек при загрузке
function render() {
  initialCards.forEach((card) => {
    addCard(card, 'end');
  });
};

// функция добавить карточку
function addCard(data, position) {
  if (data.name && data.link) {
    const objCard = new Card(data, '.template');
    const card = objCard.createCard();

    if (position === 'start') {
      gallery.prepend(card);
    } else {
      gallery.appendChild(card);
    };
  };
};

render();

// функция сохранить профиль
function saveProfile(evt) {
  evt.preventDefault();

  userInfo.setUserInfo(nameProfilePopup.value, descriptionProfilePopup.value);

  //profileTitle.textContent = nameProfilePopup.value
  //profileSubtitle.textContent = descriptionProfilePopup.value

  closePopup(popupProfile);
};

// кнопка создать карточку
function createPlace(evt) {
  evt.preventDefault();

  const data = {
    name: namePlacePopup.value,
    link: linkPlacePopup.value
  };

  addCard(data, 'start');
  closePopup(popupPlace);
};


//класс UserInfo
const userInfo = new UserInfo({
  nameSelector: '.profile__title', 
  descriptionSelector: '.profile__subtitle'
});


// клик на кнопку редактирования
editProfile.addEventListener('click', () => {
  popupProfileFormValidator.resetForm();

  const userInfoContent = userInfo.getUserInfo();
  
  nameProfilePopup.value = userInfoContent.name;
  descriptionProfilePopup.value = userInfoContent.description;

  popupProfileFormValidator.checkButtonValidity();

  openPopup(popupProfile);
});

// клик на кнопку +
addPlace.addEventListener('click', () => {
  popupPlaceFormvalidator.resetForm();
  popupPlaceFormvalidator.checkButtonValidity();

  openPopup(popupPlace);
});

//закрыть попап на клик и оверлей
popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup__close-button') || (evt.target === evt.currentTarget)) {
      closePopup(popup);
    };
  });
});

popupProfileForm.addEventListener('submit', saveProfile);
popupPlaceForm.addEventListener('submit', createPlace);
