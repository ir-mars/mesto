export class FormValidator {
    constructor(config, form) {
        this._form = form
        this._config = config
        this._inputList = Array.from(this._form.querySelectorAll(this._config.inputSelector));
        this._buttonElement = this._form.querySelector(this._config.submitButtonSelector);        
    }
    
    _hasInvalidInput = () => {
        return this._inputList.some((inputSelector) => {
          return !inputSelector.validity.valid;
        })
    };

    _enableSubmitButton = () => {
        this._buttonElement.classList.remove(this._config.inactiveButtonClass);
        this._buttonElement.disabled = false;
    }

    _disableSubmitButton = () => {
        this._buttonElement.classList.add(this._config.inactiveButtonClass);
        this._buttonElement.disabled = 'disabled'; //true;
    }

    _toggleSubmitButtonState = () => {
        if (this._hasInvalidInput()) {
            this._disableSubmitButton();
        } else {
            this._enableSubmitButton();
        }
    };

    enableValidation () {
        this._toggleSubmitButtonState();
        this._inputList.forEach((inputSelector) => {
            inputSelector.addEventListener('input', () => {
            this._checkInputValidity(inputSelector)
            this._toggleSubmitButtonState();
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
        this._inputList.forEach(input => {
            this._hideInputError(input)
        })
        this._disableSubmitButton()
    }
    
}





