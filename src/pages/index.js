import './index.css';

import { initialCards, validationConfig } from '../utils/constants.js'
import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js'

import {
  popupProfileEditButton,
  popupInputName,
  popupInputDescription,
  popupProfileForm,
  popupAddCardButton,
  popupCardForm,
  templateSelector
} from '../utils/constants.js';

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
  const user = userInfo.getUserInfo();
  popupInputName.value = user.name,
  popupInputDescription.value = user.description;
  editProfileFormValidator.resetValidation();                //сброс ошибок
  editProfilePopup.open();
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




                               





