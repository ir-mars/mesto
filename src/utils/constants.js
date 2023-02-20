export const validationConfig = {            
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-btn',
    inactiveButtonClass: 'popup__submit-btn_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'   
};

//редактирование профиля
export const popupEditProfile = document.querySelector('.popup_type_edit-profile');
export const popupProfileForm = popupEditProfile.querySelector('.popup__form');
export const popupProfileEditButton = document.querySelector('.profile__edit-button'); //кнопка
export const popupInputName = popupEditProfile.querySelector('.popup__input_type_name');
export const popupInputDescription = popupEditProfile.querySelector('.popup__input_type_description');

//добавление карточки
export const popupAddCard = document.querySelector('.popup_type_add-card');
export const popupAddCardButton = document.querySelector('.profile__add-button'); //кнопка плюс
export const popupCardForm = popupAddCard.querySelector('.popup__form');
export const templateSelector = '#card-template';

//удаление карточки
//export const cardDeleteSelector = '.popup_type_confirm';


//изменение аватара
export const avatarEditButton = document.querySelector('.profile__avatar-button'); //кнопка-карандаш
export const avatarProfile = '.profile__image';
export const popupAvatarForm = document.querySelector('.popup__form_type_avatar');





  