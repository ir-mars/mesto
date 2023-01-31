import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
    open(src, caption) {
        //console.log('open img')
        const popupOpenImage = this._popup.querySelector('.popup__big-img')
        const popupOpenImageSubtitle = this._popup.querySelector('.popup__caption')

        popupOpenImage.src =  src;                           
        popupOpenImage.alt =  caption;                          
        popupOpenImageSubtitle.textContent = caption;

        super.open()
    }
}