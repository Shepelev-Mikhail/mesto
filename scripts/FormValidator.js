export class FormValidator {
  constructor(settings, form) {
    this._form = form;
    this._settings = settings;
    this._inputs = Array.from(this._form.querySelectorAll(this._settings.inputSelector));
    this._button = this._form.querySelector(this._settings.submitButtonSelector);
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
  _checkButtonValidity () {
    if (this._form.checkValidity()) {
      this._button.classList.remove(this._settings.inactiveButtonClass);
      this._button.disabled = false;
    } else {
      this._button.classList.add(this._settings.inactiveButtonClass);
      this._button.disabled = true;
    };
  };

  // слушатели
  _setEventListeners() {
    this._inputs.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._checkButtonValidity();
      });
    });
  }

  // проверка валидации при открытии попапа
  checkValidityPopup () {
    this._inputs.forEach((input) => {
      this._checkInputValidity(input);
    });

    this._checkButtonValidity();
  };

  // валидация
  enableValidation() {
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
    });

    this._setEventListeners();
  };
}
