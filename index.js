// добавление карточек при загрузке
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
const template = document.querySelector('.template').content;
const popupPlace = document.querySelector('.popup__input_type_place');
const popupLink = document.querySelector('.popup__input_type_link');

function render() {
  initialCards.forEach((card) => {
    addCard(card.name, card.link, 'end');
  });
};

// добавление карточек
function addCard(name, link, position) {
  if (name && link) {
    const newCard = template.cloneNode(true);
    newCard.querySelector('.card__title').innerText = name;
    newCard.querySelector('.card__image').setAttribute('src', link);

    addListeners(newCard);

    if (position === 'start') {
      gallery.prepend(newCard);
    } else {
      gallery.appendChild(newCard);
    };
  }
}

function addListeners(el) {
  el.querySelector('.card__delete').addEventListener('click', handleDelete);
  el.querySelector('.card__like').addEventListener('click', handleToggleLike);
}

function handleToggleLike(event) {
  event.target.classList.toggle('card__like_active');
}

function handleDelete(event) {
  event.target.closest('.card').remove();
}

render();

// открытие и закрытие попапов
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const popup = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup__edit');
const popupAdd = document.querySelector('.popup__add');

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closeButton = document.querySelector('.popup__close-button');
const popupName = document.querySelector('.popup__input_type_name');
const popupDescription = document.querySelector('.popup__input_type_description');

const popupEditForm = popupEdit.querySelector('.popup__form');
const popupAddForm = popupAdd.querySelector('.popup__form');

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

function saveProfile(evt) {
  evt.preventDefault();

  profileTitle.textContent = popupName.value
  profileSubtitle.textContent = popupDescription.value

  closePopup();
  closePopupEdit();
}

function createPlace(evt) {
  evt.preventDefault();
  addCard(popupPlace.value, popupLink.value, 'start');
  closePopup();
  closePopupAdd();
}

editButton.addEventListener('click', () => {
  openPopup();
  openPopupEdit();
});

addButton.addEventListener('click', () => {
  openPopup();
  openPopupAdd();
});

closeButton.addEventListener('click', () => {
  closePopup();
  closePopupAdd();
  closePopupEdit();
});

popupEditForm.addEventListener('submit', saveProfile);
popupAddForm.addEventListener('submit', createPlace);

