import {
  validationConfig,
  popupProfileForm,
  popupPlaceForm,
  editProfile,
  addPlace,
  avatarIcon,
  popupAvatarForm,
  saveProfileButton,
  createCardButton,
  saveAvatarButton
} from '../components/constants.js';
import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js';
import { UserInfo } from '../components/UserInfo.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithConfirmation } from '../components/PopupWithConfirmation.js';
import { api } from '../components/Api.js';

import './index.css';

//1 Загрузка информации о пользователе с сервера
let userId

api.getProfile()
  .then(res => {
    userInfo.setUserInfo({ name: res.name, description: res.about, avatar: res.avatar });
    userId = res._id;
  });

//2 Загрузка карточек с сервера
api.getInitialCards()
  .then(cardList => {
    cardList.forEach(data => {
      const card = addCard({
        name: data.name,
        link: data.link,
        likes: data.likes,
        id: data._id,
        userId: userId,
        ownerId: data.owner._id
      });

      section.addItem(card)
    })
  })

//класс Popup
const newPopupViewImage = new PopupWithImage('.popup_view-image');
newPopupViewImage.setEventListeners();

const newPopupProfileForm = new PopupWithForm('.popup_profile', saveProfile);
newPopupProfileForm.setEventListeners();

const newPopupPlaceForm = new PopupWithForm('.popup_place', createPlace);
newPopupPlaceForm.setEventListeners();

const popupConfirmDelete = new PopupWithConfirmation('.popup_confirm', confirmDelete);
popupConfirmDelete.setEventListeners();

const popupChangeAvatar = new PopupWithForm('.popup_update-avatar')
popupChangeAvatar.setEventListeners();

// класс FormValidator
const popupProfileFormValidator = new FormValidator(validationConfig, popupProfileForm);
const popupPlaceFormvalidator = new FormValidator(validationConfig, popupPlaceForm);
const popupChangeAvatarValidator = new FormValidator(validationConfig, popupAvatarForm);

popupProfileFormValidator.enableValidation();
popupPlaceFormvalidator.enableValidation();
popupChangeAvatarValidator.enableValidation();

//класс Section
const section = new Section({ items: [], renderer: addCard }, '.gallery');

// класс Card
function addCard(data) {
  if (data.name && data.link) {
    const objCard = new Card(
      data,
      '.template',
      newPopupViewImage.open,
      () => {
        popupConfirmDelete.open(data, objCard);
      },
      () => {
        if (objCard.isLiked()) {
          api.deleteLike(data.id)
            .then(res => {
              objCard.setLikes(res.likes)
            })
        } else {
          api.addLike(data.id)
            .then(res => {
              objCard.setLikes(res.likes)
            })
        }
      });
    const card = objCard.createCard();

    return card;
  };
};

//класс UserInfo
const userInfo = new UserInfo({
  nameSelector: '.profile__title',
  descriptionSelector: '.profile__subtitle',
  avatarSelector: '.profile__image'
});

//колбэк подтверждение удаления
function confirmDelete(evt, data, objCard) {
  api.deleteCard(data.id)
    .then(res => {
      objCard.handleDelete();
    })
};

// колбэк сохранение профиля
function saveProfile(evt, data) {
  evt.preventDefault();

  //3 Редактирование профиля
  const { name, description } = data;
  saveProfileButton.textContent = 'Сохранение...';

  api.editProfile(name, description)
    .then(res => {
      userInfo.setUserInfo({ name: res.name, description: res.about, avatar: res.avatar });
      saveProfileButton.textContent = 'Сохранить';
    })
};

// колбэк создание карточки
function createPlace(evt, data) {
  evt.preventDefault();

  //4 Добавление новой карточки
  createCardButton.textContent = 'Создание...';

  api.addCard(data)
    .then(data => {
      const card = addCard({
        name: data.name,
        link: data.link,
        likes: data.likes,
        id: data._id,
        userId: userId,
        ownerId: data.owner._id
      });
      section.addItem(card);
      createCardButton.textContent = 'Создать';
    })
};

//колбэк клик на кнопку редактирования профиля
function clickEditProfileButton() {
  popupProfileFormValidator.resetForm();
  newPopupProfileForm.setInputValues(userInfo.getUserInfo());
  popupProfileFormValidator.checkButtonValidity();

  newPopupProfileForm.open();
};

// колбэк клик на кнопку создания карточки
function clickAddPlaceButton() {
  popupPlaceFormvalidator.resetForm();
  popupPlaceFormvalidator.checkButtonValidity();

  newPopupPlaceForm.open();
};

// колбэк клик на аватарку
function clickAvatarIcon() {
  popupChangeAvatarValidator.resetForm();
  popupChangeAvatarValidator.checkButtonValidity();

  popupChangeAvatar.open();

  //замена колбэка класса PopupWithForm
  popupChangeAvatar.changeSubmitForm((evt) => {
    const link = popupChangeAvatar.getInputValues().link;
    saveAvatarButton.textContent = 'Сохранение...';
    api.updateAvatar(link)
      .then(res => {
        saveAvatarButton.textContent = 'Сохранить';
        userInfo.setUserInfo({ name: res.name, description: res.about, avatar: res.avatar });
      })
  })
};

// клик на кнопку редактирования
editProfile.addEventListener('click', clickEditProfileButton);

// клик на кнопку +
addPlace.addEventListener('click', clickAddPlaceButton);

//клик на аватар
avatarIcon.addEventListener('click', clickAvatarIcon);