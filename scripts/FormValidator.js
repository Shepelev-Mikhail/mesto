class FormValidator {
  constructor(settings, form) {
    this._form = form;
    this._settings = settings;
  }

  //показать ошибку валидации
  _showErrorMessage (input) {
    const { inputErrorClass, errorClass } = this._settings;

    const errorMessage = this._form.querySelector(`.${input.id}-error`);
    input.classList.add(inputErrorClass);
    errorMessage.classList.add(errorClass);
    errorMessage.textContent = input.validationMessage;
  };

  // скрыть ошибку валидации
  _hideErrorMessage (input) {
    const { inputErrorClass, errorClass } = this._settings;

    const errorMessage = this._form.querySelector(`.${input.id}-error`);
    input.classList.remove(inputErrorClass);
    errorMessage.classList.remove(errorClass);
    errorMessage.textContent = '';
  };

  // проверка валидации инпутов
  _checkInputValidity (input) {
    if (input.validity.valid) {
      this._hideErrorMessage(input);
    } else {
      this._showErrorMessage(input);
    };
  };

  // проверка валидации кнопки
  _checkButtonValidity (button) {
    if (this._form.checkValidity()) {
      button.classList.remove(this._settings.inactiveButtonClass);
      button.disabled = false;
    } else {
      button.classList.add(this._settings.inactiveButtonClass);
      button.disabled = true;
    };
  };

  // // проверка валидации при открытии попапа
  // const checkValidityPopup = (btnEvent, rest, form, btnSubmit, inputs) => {
  //   btnEvent.addEventListener('click', () => {
  //     checkButtonValidity(rest, form, btnSubmit);

  //     inputs.forEach((input) => {
  //       checkInputValidity(rest, form, input);
  //     });
  //   });
  // };

  _setEventListeners() {
    const inputs = Array.from(this._form.querySelectorAll(this._settings.inputSelector));
    const button = this._form.querySelector(this._settings.submitButtonSelector);

    //checkValidityPopup(addPlace, rest, form, button, inputs);
    //checkValidityPopup(editProfile, rest, form, button, inputs);

    inputs.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._checkButtonValidity(button);
      });
    });
  }

  enableValidation() {
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
    });

    this._setEventListeners();
  };
}


const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};
