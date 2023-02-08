import './index.css';

import { initialCards, validationConfig } from '../utils/constants.js'
import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js'
   
//profile
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const profileElement = document.querySelector('.profile');
const profileNameSelector = profileElement.querySelector('.profile__title');
const profileJobSelector = profileElement.querySelector('.profile__subtitle');
const popupProfileEditButton = document.querySelector('.profile__edit-button');
const popupProfileCloseButton = popupEditProfile.querySelector('.popup__close-btn');
const popupInputName = popupEditProfile.querySelector('.popup__input_type_name');
const popupInputDescription = popupEditProfile.querySelector('.popup__input_type_description');
const formEditProfile = document.querySelector('.popup__form_type_edit-profile');
const popupProfileForm = popupEditProfile.querySelector('.popup__form');      

//add card
const popupAddCard = document.querySelector('.popup_type_add-card');
const popupAddCardButton = document.querySelector('.profile__add-button');
const popupCardForm = popupAddCard.querySelector('.popup__form');   

const templateSelector = '#card-template';

const createCard = (data) => {
  return new Card(data, templateSelector, handleCardClick); 
}

const renderCard = (data) => {               
  const cardEl = createCard(data);
  const card = cardEl.generateCard();  
  cardSection.addItem(card);
};

const handleCardClick = (name, link) => {                 
  popupWithImage.open(name, link);   
};

const handleSubmitAddCard = (values) => {       
  renderCard(values);
  //console.log('values =>', values)  
  addCardPopup.close();              
};

const userInfo = new UserInfo({
  name: '.profile__title',
  description: '.profile__subtitle'
});

const handleSubmitProfile = (values) => {      
  userInfo.setUserInfo(values);
  editProfilePopup.close();
};

popupProfileEditButton.addEventListener('click', () => {         
  editProfileFormValidator.resetValidation();                //сброс ошибок
  editProfilePopup.open();
  const user = userInfo.getUserInfo();
  popupInputName.value = user.name,
  popupInputDescription.value = user.description
});

popupAddCardButton.addEventListener('click', () => {             
  addCardFormValidator.resetValidation();                    //сброс ошибок
  addCardPopup.open();  
});

const popupWithImage = new PopupWithImage('.popup_type_image')   
popupWithImage.setEventListeners();

const editProfilePopup = new PopupWithForm('.popup_type_edit-profile', handleSubmitProfile)  
editProfilePopup.setEventListeners();

const addCardPopup = new PopupWithForm('.popup_type_add-card', handleSubmitAddCard)    
addCardPopup.setEventListeners();

const cardSection = new Section({items: initialCards, renderer: renderCard}, '.cards')
cardSection.renderCards();                 //отрисовка карточек

const addCardFormValidator = new FormValidator(validationConfig, popupCardForm)
const editProfileFormValidator = new FormValidator(validationConfig, popupProfileForm)

addCardFormValidator.enableValidation()
editProfileFormValidator.enableValidation()




                               





