import { Popup } from './Popup.js'

export class PopupWithForm extends Popup {
    constructor(popupSelector, handleSubmit) {
        super(popupSelector)

        this._handleSubmit = handleSubmit;
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = this._form.querySelector('.popup__input')
    }

    _getInputValues() {
        const values = {};      //создали пустой обьект

        this._inputList.forEach(input => {
            const name = input.name
            const value = input.value

            values[name] = value 
        });
        return values;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            this._handleSubmit(evt, this._getInputValues());
        });    
    }

    close() {
        super.close();
        this._form.reset();
    }

    setFormValues() {
        this._inputList.forEach(input => {
            const name = input.name;
            if(values[name]) {
                input.value = values[name]
            }
        });
    }
}