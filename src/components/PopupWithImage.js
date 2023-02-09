import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)

        this._image = this._popup.querySelector('.popup__big-img')
        this._caption = this._popup.querySelector('.popup__caption')
    }
    
    open(name, link) {
        //console.log('open img')
        
        this._image.src =  link;                           
        this._image.alt =  name;                          
        this._caption.textContent = name;

        super.open()
    }
}