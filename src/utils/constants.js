export const validationConfig = {            
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-btn',
    inactiveButtonClass: 'popup__submit-btn_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'   
};

export const popupEditProfile = document.querySelector('.popup_type_edit-profile');
export const popupProfileEditButton = document.querySelector('.profile__edit-button');
export const popupInputName = popupEditProfile.querySelector('.popup__input_type_name');
export const popupInputDescription = popupEditProfile.querySelector('.popup__input_type_description');
export const popupProfileForm = popupEditProfile.querySelector('.popup__form');
export const popupAddCard = document.querySelector('.popup_type_add-card');
export const popupAddCardButton = document.querySelector('.profile__add-button');
export const popupCardForm = popupAddCard.querySelector('.popup__form');
export const templateSelector = '#card-template';

const arkhiz = new URL('./../images/arkhiz.jpg', import.meta.url);
const dombay = new URL('./../images/dombay.jpg', import.meta.url);
const elbrus = new URL('./../images/elbrus.jpg', import.meta.url);
const kirovsk = new URL('./../images/kirovsk.jpg', import.meta.url);
const polyana = new URL('./../images/polyana.jpg', import.meta.url);
const sheregesh = new URL('./../images/sheregesh.jpg', import.meta.url);
 

export const initialCards = [
    {
      name: 'Архыз',
      link: arkhiz
    },
    {
      name: 'Гора Домбай',
      link: dombay
    },
    {
      name: 'Гора Эльбрус',
      link: elbrus
    },
    {
      name: 'Кировск',
      link: kirovsk
    },
    {
      name: 'Красная Поляна',
      link: polyana
    },
    {
      name: 'Шерегеш',
      link: sheregesh
    }
];

  