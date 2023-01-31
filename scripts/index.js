import { FormValidator } from './FormValidator.js';
import { Card } from './Card.js';
import { Section } from './Section.js';
import { Popup } from './Popup.js';
import { PopupWithImage } from './PopupWithImage.js';
import { PopupWithForm } from './PopupWithForm.js';
import { UserInfo } from './UserInfo.js'

const initialCards = [
    {
      name: 'Архыз',
      link: './images/arkhiz.jpg'
    },
    {
      name: 'Гора Домбай',
      link: './images/dombay.jpg'
    },
    {
      name: 'Гора Эльбрус',
      link: './images/elbrus.jpg'
    },
    {
      name: 'Кировск',
      link: './images/kirovsk.jpg'
    },
    {
      name: 'Красная Поляна',
      link: './images/polyana.jpg'
    },
    {
      name: 'Шерегеш',
      link: './images/sheregesh.jpg'
    }
  ];
   
//profile
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const profileElement = document.querySelector('.profile');
const profileTitleElement = profileElement.querySelector('.profile__title');
const profileSubtitleElement = profileElement.querySelector('.profile__subtitle');
const popupProfileEditButton = document.querySelector('.profile__edit-button');
const popupProfileCloseButton = popupEditProfile.querySelector('.popup__close-btn');
const popupInputName = popupEditProfile.querySelector('.popup__input_type_name');
const popupInputDescription = popupEditProfile.querySelector('.popup__input_type_description');
const formEditProfile = document.querySelector('.popup__form_type_edit-profile');
const popupProfileForm = popupEditProfile.querySelector('.popup__form');      

//add card
const popupAddCard = document.querySelector('.popup_type_add-card');
const popupAddCardButton = document.querySelector('.profile__add-button');
const popupAddCardCloseButton = popupAddCard.querySelector('.popup__close-btn');
const popupInputImgName = popupAddCard.querySelector('.popup__input_type_img-name');
const popupInputImgLink = popupAddCard.querySelector('.popup__input_type_img-link');
const formAddCard = document.querySelector('.popup__form_type_add-card');
const popupCardForm = popupAddCard.querySelector('.popup__form');   

//image
const popupImage = document.querySelector('.popup_type_image');
const popupImageCloseButton = popupImage.querySelector('.popup__close-btn');
const popupImageContainer = document.querySelector('.popup__img-container');
const popupOpenImage = popupImageContainer.querySelector('.popup__big-img');
const popupOpenImageSubtitle = popupImageContainer.querySelector('.popup__caption');


const cardsContainer = document.querySelector('.cards');
const templateSelector = '#card-template';

const validationConfig = {            
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-btn',
  inactiveButtonClass: 'popup__submit-btn_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'   
};

const addCardFormValidator = new FormValidator(validationConfig, popupCardForm)
const editProfileFormValidator = new FormValidator(validationConfig, popupProfileForm)

addCardFormValidator.enableValidation()
editProfileFormValidator.enableValidation()

//////////////////////////////////////////////////////

//const addCardPopup = new Popup('.popup_type_add-card')
//addCardPopup.setEventListeners()

const handleSubmitProfile = (evt) => {
  evt.preventDefault();
  profileTitleElement.textContent = popupInputName.value;
  profileSubtitleElement.textContent = popupInputDescription.value;
  editProfilePopup.close();
};

const handleSubmitAddCard = (evt, values) => {
  renderCard({
      name: popupInputImgName.value,        //      ???
      link: popupInputImgLink.value         //      ??? 
  });
  addCardPopup.close()//closePopup(popupAddCard);              ???
};

const handleImagePopup = (src, caption) => {         
  popupWithImgOpen.open(src, caption)
  //popupOpenImage.src =  link;                           
  //popupOpenImage.alt =  name;                          
  //popupOpenImageSubtitle.textContent = name;
  //openPopup(popupImage);   
};

const popupWithBigImg = new PopupWithImage('.popup_type_image')
popupWithBigImg.setEventListeners()

const addCardPopup = new PopupWithForm('.popup_type_add-card', handleSubmitAddCard)
addCardPopup.setEventListeners()

const editProfilePopup = new PopupWithForm('.popup_type_edit-profile', handleSubmitProfile)
editProfilePopup.setEventListeners()




//закрытие попапа с помощью escape
/*const closePopupByEsc = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    closePopup(openedPopup);
  }
};*/

//закрытие попапа оверлей
/*const closePopupByOverlay = (evt) => {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.currentTarget);
  }
};*/

//открытие попапа
/*const openPopup = function (popup) {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', closePopupByEsc);  
};*/

//закрытие попапа
/*const closePopup = function (popup) {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closePopupByEsc);  
};*/

//попап редактирования профиля
popupProfileEditButton.addEventListener('click', () =>{
  editProfilePopup.open() //openPopup(popupEditProfile);
  popupInputName.value = profileTitleElement.textContent;
  popupInputDescription.value = profileSubtitleElement.textContent;
});

/*popupProfileCloseButton.addEventListener('click', function() {
  closePopup(popupEditProfile);
});*/

//попап добавления карточки
popupAddCardButton.addEventListener('click', () => {
  addCardPopup.open()
  //addCardFormValidator.resetValidation();                  
  //openPopup(popupAddCard);   
  //popupInputImgName.value = '';
  //popupInputImgLink.value = '';  
});

/*popupAddCardCloseButton.addEventListener('click', function() {
  closePopup(popupAddCard);
});*/
                               
//попап с картинкой

/*popupImageCloseButton.addEventListener('click', function() {
  closePopup(popupImage);
});*/

const renderCard = (data) => {               
  const cardEl = new Card(data, templateSelector, handleImagePopup);
  const card = cardEl.generateCard();
  cardsContainer.prepend(card);                     //вставили на страницу
};

initialCards.forEach((data) => {
  renderCard(data);                             //отрисовка карточек
});

//popupEditProfile.addEventListener('click', closePopupByOverlay);
//popupAddCard.addEventListener('click', closePopupByOverlay);
//popupImage.addEventListener('click', closePopupByOverlay);

//formEditProfile.addEventListener('submit', handleSubmitProfile);
formAddCard.addEventListener('submit', handleSubmitAddCard);










