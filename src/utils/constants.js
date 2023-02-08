export const validationConfig = {            
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-btn',
    inactiveButtonClass: 'popup__submit-btn_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'   
};

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

  