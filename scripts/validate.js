const showInputError = (formSelector, inputSelector, errorMessage, config) => {
  inputSelector.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);
  const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
}

const hideInputError = (formSelector, inputSelector, config) => {
  inputSelector.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = '';
  const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
}

const checkInputValidity = (formSelector, inputSelector, config) => {
  if(!inputSelector.validity.valid) {
    showInputError(formSelector, inputSelector, inputSelector.validationMessage, config);
  } else {
    hideInputError(formSelector, inputSelector, config);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputSelector) => {
    return !inputSelector.validity.valid;
  })
}

const toggleSubmitButtonState = (inputList, buttonElement, config) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.inactiveButtonClass);
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
  }
};

const setEventListeners = (formSelector, config) => {
  const inputList = Array.from(formSelector.querySelectorAll(config.inputSelector));
  const buttonElement = formSelector.querySelector(config.submitButtonSelector);
  toggleSubmitButtonState(inputList, buttonElement, config);
    inputList.forEach((inputSelector) => {
      inputSelector.addEventListener('input', () => {
        checkInputValidity(formSelector, inputSelector, config);
        toggleSubmitButtonState(inputList, buttonElement, config);
      })
    })
};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formSelector) => {
    formSelector.addEventListener('submit', (evt) => {
    evt.preventDefault()
  })
    setEventListeners(formSelector, config);
  })
};

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-btn',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'   
};

enableValidation(config);