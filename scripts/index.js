import { initialCards, validationConfig } from './constants.js'
import { FormValidator } from './FormValidator.js';
import { Card } from './Card.js';
import { Section } from './Section.js';
import { Popup } from './Popup.js';
import { PopupWithImage } from './PopupWithImage.js';
import { PopupWithForm } from './PopupWithForm.js';
import { UserInfo } from './UserInfo.js'
   
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




                               





