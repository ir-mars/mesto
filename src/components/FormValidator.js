export class FormValidator {
    constructor(config, form) {
        this._form = form
        this._config = config
        this._inputList = Array.from(this._form.querySelectorAll(this._config.inputSelector));
        this._buttonElement = this._form.querySelector(this._config.submitButtonSelector);        
    }
    
    _hasInvalidInput = () => {
        return this._inputList.some((input) => {
          return !input.validity.valid;
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
        this._inputList.forEach((input) => {
            input.addEventListener('input', () => {
            this._checkInputValidity(input)
            this._toggleSubmitButtonState();
            });
        });
    }; 
    
    _checkInputValidity = (input) => {
        if(!input.validity.valid) {
            this._showInputError(input, input.validationMessage);
        } else {
            this._hideInputError(input);
        }
    };
    
    _showInputError = (input, errorMessage) => {
        const errorElement = this._form.querySelector(`#${input.id}-error`);
        input.classList.add(this._config.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._config.errorClass);  
    };

    _hideInputError = (input) => {
        const errorElement = this._form.querySelector(`#${input.id}-error`);
        input.classList.remove(this._config.inputErrorClass);
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





