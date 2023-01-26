export class FormValidator {
    constructor(config, form) {
        this._form = form
        this._config = config        
    }
    
    _hasInvalidInput = (inputList) => {
        return inputList.some((inputSelector) => {
          return !inputSelector.validity.valid;
        })
    };

    _enableSubmitButton = (buttonElement) => {
        buttonElement.classList.remove(this._config.inactiveButtonClass);
        buttonElement.disabled = false;
    }

    _disableSubmitButton = (buttonElement) => {
        buttonElement.classList.add(this._config.inactiveButtonClass);
        buttonElement.disabled = true;
    }

    _toggleSubmitButtonState = (inputList, buttonElement) => {
        if (this._hasInvalidInput(inputList)) {
            this._disableSubmitButton(buttonElement);
        } else {
            this._enableSubmitButton(buttonElement);
        }
    };

    enableValidation () {
        const inputList = Array.from(this._form.querySelectorAll(this._config.inputSelector));
        const buttonElement = this._form.querySelector(this._config.submitButtonSelector);
        
        this._toggleSubmitButtonState(inputList, buttonElement);
        inputList.forEach((inputSelector) => {
            inputSelector.addEventListener('input', () => {
            this._checkInputValidity(inputSelector)
            this._toggleSubmitButtonState(inputList, buttonElement);
            });
        });
    }; 
    
    _checkInputValidity = (inputSelector) => {
        if(!inputSelector.validity.valid) {
            this._showInputError(inputSelector, inputSelector.validationMessage);
        } else {
            this._hideInputError(inputSelector);
        }
    };
    
    _showInputError = (inputSelector, errorMessage) => {
        const errorElement = this._form.querySelector(`#${inputSelector.id}-error`);
        inputSelector.classList.add(this._config.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._config.errorClass);  
    };

    _hideInputError = (inputSelector) => {
        const errorElement = this._form.querySelector(`#${inputSelector.id}-error`);
        inputSelector.classList.remove(this._config.inputErrorClass);
        errorElement.classList.remove(this._config.errorClass);
        errorElement.textContent = '';  
    };
    
    resetValidation() {
        const inputList = Array.from(this._form.querySelectorAll(this._config.inputSelector));
        inputList.forEach(input => {
            this._hideInputError(input)
        })
    }
    
}





