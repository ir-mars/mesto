import { Popup } from './Popup.js'

export class PopupWithForm extends Popup {
    constructor(popupSelector, handleSubmit) {     //принимает колбэк сабмита
        super(popupSelector)

        this._handleSubmit = handleSubmit;
        this._form = this._popup.querySelector('.popup__form');  //console.log('this._form =>', this._form)
        this._inputs = [...this._form.querySelectorAll('.popup__input')];
    }

    _getInputValues() {
        this._values = {};      //создали пустой обьект

        this._inputs.forEach(input => {        
            this._values[input.name] = input.value  //записали в пустой обьект данные
        });
        return this._values;    
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmit(this._getInputValues());
        });    
    }

    close() {
        super.close();
        this._form.reset();
    }
}