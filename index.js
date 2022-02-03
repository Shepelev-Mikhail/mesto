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

const popupViewImage = document.querySelector('.popup_view-image');
const imagePopupViewImage = popupViewImage.querySelector('.popup__image');
const captionPopupViewImage = popupViewImage.querySelector('.popup__caption');

const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const popupProfile = document.querySelector('.popup_profile');
const nameProfilePopup = popupProfile.querySelector('.popup__input_type_name');
const descriptionProfilePopup = popupProfile.querySelector('.popup__input_type_description');

const popupPlace = document.querySelector('.popup_place');
const namePlacePopup = popupPlace.querySelector('.popup__input_type_place');
const linkPlacePopup = popupPlace.querySelector('.popup__input_type_link');

const editProfile = document.querySelector('.profile__edit-button');
const addPlace = document.querySelector('.profile__add-button');
const listCloseButton = document.querySelectorAll('.popup__close-button');

const popupProfileForm = popupProfile.querySelector('.popup__form');
const popupPlaceForm = popupPlace.querySelector('.popup__form');

// добавление карточек при загрузке
function render() {
  initialCards.forEach((card) => {
    addCard(card.name, card.link, 'end');
  });
};

// добавление карточек по кнопке
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
  };
};

// добавляем слушатели события клик
function addListeners(el) {
  el.querySelector('.card__delete').addEventListener('click', handleDelete);
  el.querySelector('.card__like').addEventListener('click', handleToggleLike);
  el.querySelector('.card__image').addEventListener('click', handleOpenImage);
};

// лайк карточки
function handleToggleLike(event) {
  event.target.classList.toggle('card__like_active');
};

// удаление карточки
function handleDelete(event) {
  event.target.closest('.card').remove();
};

// попап просмотра карточки
function handleOpenImage(event) {
  const card = event.target.closest('.card');
  const titleCard = card.querySelector('.card__title').textContent;
  const cardImageLink = event.target.getAttribute('src');

  imagePopupViewImage.setAttribute('src', cardImageLink);
  captionPopupViewImage.textContent = titleCard;

  openPopup(popupViewImage);
};

render();

// открытие и закрытие попапов
function openPopup(currentPopup) {
  closePopup();
  currentPopup.classList.add('popup_opened');
}

function closePopup() {
  const listPopupsOpened = document.querySelectorAll('.popup_opened');

  listPopupsOpened.forEach((popup) => {
    popup.classList.remove('popup_opened');
  });
}

// кнопка сохранить 
function saveProfile(evt) {
  evt.preventDefault();

  profileTitle.textContent = nameProfilePopup.value
  profileSubtitle.textContent = descriptionProfilePopup.value

  closePopup();
}

// кнопка создать карточку
function createPlace(evt) {
  evt.preventDefault();

  addCard(namePlacePopup.value, linkPlacePopup.value, 'start');
  closePopup();
}

editProfile.addEventListener('click', () => {
  nameProfilePopup.value = profileTitle.textContent;
  descriptionProfilePopup.value = profileSubtitle.textContent;

  openPopup(popupProfile);
});

addPlace.addEventListener('click', () => {
  openPopup(popupPlace);
});

listCloseButton.forEach((closeButton) => {
  closeButton.addEventListener('click', () => {
    closePopup();
  });
});

popupProfileForm.addEventListener('submit', saveProfile);
popupPlaceForm.addEventListener('submit', createPlace);