import { Popup } from './Popup.js'

export class PopupWithForm extends Popup {
    constructor(popupSelector, {handleSubmit}) {     //принимает колбэк сабмита
        super(popupSelector)

        this._handleSubmit = handleSubmit;
        this._form = this._popup.querySelector('.popup__form');  //console.log('this._form =>', this._form)
        this._inputs = [...this._form.querySelectorAll('.popup__input')];     //inputList
        this._submitButton = this._form.querySelector('.popup__submit-btn');  //кнпка сабмита формы
    }

    _getInputValues = () => {
        this._values = {};      //создали пустой обьект

        this._inputs.forEach(input => {        
            this._values[input.name] = input.value  //записали в пустой обьект данные
        });
        return this._values;    
    }

    setEventListeners =() => {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._renderLoading(true);
            this._handleSubmit(this._getInputValues())
              .then(() => this.close())
              .catch((err) => {
                  console.log(err);
              })
              .finally(() => this._renderLoading(false))            
        });    
    }

    close() {
        super.close();
        this._form.reset();
    }

    setInputValues(values) {
        this._inputs.forEach((input) => {
            input.value = values[input.name]
        });
    }

    //изменение текста кнопки сабмита
    _renderLoading(isLoading, text='Сохранение..') {
        if(isLoading) {
            this._submitButton.textContent = text;
        } else {
            this._submitButton.textContent = this._submitButton.textContent;
        }
    }
}