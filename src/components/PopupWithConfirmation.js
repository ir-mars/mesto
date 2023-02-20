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

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._renderLoading(true);
            this._handleSubmit()
            .then(() => this.close())
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                this._renderLoading(false);
            })
        });    
    }

    _renderLoading(isLoading, text = 'Удаление...') {
        if(isLoading) {
            this._submitButton.textContent = text;
        } else {
            this._submitButton.textContent = this._submitButton.textContent;
        }
    }    
}
