import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
    open(name, link) {
        //console.log('open img')
        const popupBigImage = this._popup.querySelector('.popup__big-img')
        const popupCaption = this._popup.querySelector('.popup__caption')

        popupBigImage.src =  link;                           
        popupBigImage.alt =  name;                          
        popupCaption.textContent = name;

        super.open()
    }
}