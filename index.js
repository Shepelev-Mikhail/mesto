let popup = document.querySelector('.popup');
let editButton = document.querySelector('.edit-button');
let popupClose = document.querySelector('.popup__close');
let popupName = document.querySelector('.popup__name');
let popupDescription = document.querySelector('.popup__description');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let popupForm = document.querySelector('.popup__form');

function openPopup () {
    // popupDescription.value = profileSubtitle.innerHTML;
    popup.classList.add('popup_opened');
}

function closePopup () {
    popup.classList.remove('popup_opened');
} 

editButton.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);



function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    console.log(popupDescription.value);
    // Получите значение полей jobInput и nameInput из свойства value
    const valNameInput = popupDescription.value;

    // Выберите элементы, куда должны быть вставлены значения полей
    const profileSubtitle = document.querySelector('.profile__subtitle');

    // Вставьте новые значения с помощью textContent
    profileSubtitle.textContent = valNameInput;

    closePopup();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
popupForm.addEventListener('submit', formSubmitHandler);