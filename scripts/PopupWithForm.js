import { Popup } from './Popup.js'

export class PopupWithForm extends Popup {
    constructor(popupSelector, handleSubmit) {
        super(popupSelector)

        this._handleSubmit = handleSubmit;
        this._form = this._popup.querySelector('.popup__form');
        this._inputs = [...this._form.querySelectorAll('.popup__input')];
    }

    _getInputValues() {
        const values = {};      //создали пустой обьект

        this._inputs.forEach(input => {
            values[input.name] = input.value 
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
}