//показать ошибку валидации
const showErrorMessage = ({inputErrorClass, errorClass}, form, input)=> {
  const errorMessage = form.querySelector(`.${input.id}-error`);
  input.classList.add(inputErrorClass);
  errorMessage.classList.add(errorClass);
  errorMessage.textContent = input.validationMessage;
}

// скрыть ошибку валидации
const hideErrorMessage = ({inputErrorClass, errorClass}, form, input) => {
  const errorMessage = form.querySelector(`.${input.id}-error`);
  input.classList.remove(inputErrorClass);
  errorMessage.classList.remove(errorClass);
  errorMessage.textContent = '';
}

// проверка валидации инпутов
const checkInputValidity = (rest, form, input) => {
  if (input.validity.valid) {
    hideErrorMessage(rest, form, input);
  } else {
    showErrorMessage(rest, form, input);
  }
}

// проверка валидации кнопки
const checkButtonValidity = ({inactiveButtonClass}, form, button) => {
  if (form.checkValidity()) {
    button.classList.remove(inactiveButtonClass);
    button.disabled = false;
  } else {
    button.classList.add(inactiveButtonClass);
    button.disabled = true;
  }
}

function enableValidation({formSelector, inputSelector, submitButtonSelector, ...rest}) {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      //console.log(form.checkValidity());
    })
    
    const inputList = Array.from(form.querySelectorAll(inputSelector));
    const button = form.querySelector(submitButtonSelector);
  
    checkButtonValidity(rest, form, button);
  
    inputList.forEach((input) => {
      input.addEventListener('input', () => {
        checkInputValidity(rest, form, input);
        checkButtonValidity(rest, form, button);
      });
    })
  })
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}); 