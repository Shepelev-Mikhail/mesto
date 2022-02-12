const showInputError = (popupForm, popupInput, errorMessage) => {
  const popupError = popupForm.querySelector(`.${popupInput.id}-error`);
  popupInput.classList.add('popup__input_type_error');
  popupError.textContent = errorMessage;
  popupError.classList.add('popup__error_visible');
}

const hideInputError = (popupForm, popupInput, errorMessage) => {
  const popupError = popupForm.querySelector(`.${popupInput.id}-error`);
  popupInput.classList.remove('popup__input_type_error');
  popupError.classList.remove('popup__error_visible');
  popupError.textContent = '';
}

const isValid = (popupForm, popupInput) => {
  if(!popupInput.validity.valid) {
    showInputError(popupForm, popupInput, popupInput.validationMessage);
  } else {
    hideInputError(popupForm, popupInput);
  };
};

const setEventListeners = (popupForm) => {
  const inputList = Array.from(popupForm.querySelectorAll('.popup__input'));
  const btnSubmit = popupForm.querySelector('.popup__submit');
  inputList.forEach((popupInput) => {
    popupInput.addEventListener('input', () => {
      isValid(popupForm, popupInput);
      toggleButtonState(inputList, btnSubmit);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((popupForm) => {
    popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    setEventListeners(popupForm);
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((popupInput) => {
    return !popupInput.validity.valid;
  });
};

const toggleButtonState = (inputList, btnSubmit) => {
  if(hasInvalidInput(inputList)) {
    btnSubmit.classList.add('popup__submit_disabled');
    btnSubmit.disabled = true;
  } else {
    btnSubmit.classList.remove('popup__submit_disabled');
    btnSubmit.disabled = false;
  }
}

enableValidation();