export class FormValidator {
  constructor(settings, form) {
    this._form = form;

    this._formSelector = settings.formSelector;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;

    this._inputs = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._button = this._form.querySelector(this._submitButtonSelector);
  };

  //показать ошибку валидации
  _showErrorMessage(input) {
    const errorMessage = this._form.querySelector(`.${input.id}-error`);
    input.classList.add(this._inputErrorClass);
    errorMessage.classList.add(this._errorClass);
    errorMessage.textContent = input.validationMessage;
  };

  // скрыть ошибку валидации
  _hideErrorMessage(input) {
    const errorMessage = this._form.querySelector(`.${input.id}-error`);
    input.classList.remove(this._inputErrorClass);
    errorMessage.classList.remove(this._errorClass);
    errorMessage.textContent = '';
  };

  // проверка валидации инпутов
  _checkInputValidity(input) {
    if (input.validity.valid) {
      this._hideErrorMessage(input);
    } else {
      this._showErrorMessage(input);
    };
  };

  // проверка валидации кнопки
  checkButtonValidity() {
    if (this._form.checkValidity()) {
      this._button.classList.remove(this._inactiveButtonClass);
      this._button.disabled = false;
    } else {
      this._button.classList.add(this._inactiveButtonClass);
      this._button.disabled = true;
    };
  };

  // слушатели
  _setEventListeners() {
    this._inputs.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this.checkButtonValidity();
      });
    });
  };

  // ресет инпутов и ошибок
  resetForm() {
    this._form.reset();

    this._inputs.forEach((input) => {
      this._hideErrorMessage(input);
    });
  };

  // валидация
  enableValidation() {
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
    });

    this._setEventListeners();
  };
};
