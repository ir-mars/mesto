import { Popup } from './Popup.js'

export class PopupWithConfirmation extends Popup {
    constructor(popupSelector) {
        super(popupSelector)

        this._form = this._popup.querySelector('.popup__form');
        this._submitButton = this._form.querySelector('.popup__submit-btn');
    }

    handleSubmit(func) {
        this._handleSubmit = func;
    }

    loading(isLoading) {
        if(isLoading) {
            this._submitButton.textContent = 'Удаление...';            
        } else {
            this._submitButton.textContent = 'Да';            
        }
    }    
    
    setEventListeners() {        
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();        
            this._handleSubmit()        
        });         
    }  
}
