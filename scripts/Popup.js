export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector)
        this._Escape = 'Escape'
    }

    _handleEscClose = (evt) => {             //!!!потеря контекста
        if (evt.key === this._Escape) {
            //const openedPopup = document.querySelector('.popup_is-opened');
            //closePopup(openedPopup);
            this.close();
        }    
    }

    open() {
        //console.log('!!!')
        this._popup.classList.add('popup_is-opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popup.classList.remove('popup_is-opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    setEventListeners() {
        this._popup.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-btn')) {
                this.close();
            }
        });
    }
}

