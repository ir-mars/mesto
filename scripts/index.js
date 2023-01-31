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

      
const containerSelector = document.querySelector('.cards');
const templateSelector = '#card-template';

///////////////////////////////////
const createCard = (data) => {
  return new Card(data, templateSelector, handleCardClick)
}

const renderCard = (data) => {               
  const cardEl = createCard(data);
  const card = cardEl.createCard();
  cardSection.addItem(card);
}

/*const renderCard = (data) => {               //было
  const cardEl = new Card(data, templateSelector, handleImagePopup);
  const card = cardEl.generateCard();
  containerSelector.prepend(card);                     //вставили на страницу
};*/

/*initialCards.forEach((data) => {
  renderCard(data);                             //отрисовка карточек
});*/

//////////////////////////////////////////
const userInfo = new UserInfo({               //создали экземпляр профайла
  profileNameSelector: '.profile__title',
  profileJobSelector: '.profile__subtitle'
});


////////////////////////////////////////////////////////
const handleCardClick = (src, caption) => {         
  popupWithBigImg.open(src, caption);   
};

const handleSubmitProfile = (evt) => {      ///&&&&&&&&&&&&&&&&&&
  evt.preventDefault();
  profileNameSelector.textContent = popupInputName.value; 
  profileJobSelector.textContent = popupInputDescription.value;
  editProfilePopup.close();
};

const handleSubmitAddCard = (evt, values) => {
  renderCard({
      name: popupInputImgName.value,        //      ???
      link: popupInputImgLink.value         //      ??? 
  });
  addCardPopup.close()//closePopup(popupAddCard);              ???
};

const popupWithBigImg = new PopupWithImage('.popup_type_image')
popupWithBigImg.setEventListeners();
                                            //editProfilePopupSelector   
const editProfilePopup = new PopupWithForm('.popup_type_edit-profile', handleSubmitProfile)
editProfilePopup.setEventListeners();
                                       //addCardPopupSelector
const addCardPopup = new PopupWithForm('.popup_type_add-card', handleSubmitAddCard)
addCardPopup.setEventListeners();
//const addCardPopup = new Popup('.popup_type_add-card')
//addCardPopup.setEventListeners()

///////////////////////////////////////////////////
const cardSection = new Section({
  items: initialCards,
  renderer: renderCard
 }, containerSelector)

const addCardFormValidator = new FormValidator(validationConfig, popupCardForm)
const editProfileFormValidator = new FormValidator(validationConfig, popupProfileForm)

addCardFormValidator.enableValidation()
editProfileFormValidator.enableValidation()

//////////////////////////////////////////////////////

//попап редактирования профиля
popupProfileEditButton.addEventListener('click', () => {
  editProfilePopup.open();
  //popupInputDescription.value = profileSubtitleElement.textContent;
});

//попап добавления карточки
popupAddCardButton.addEventListener('click', () => {
  addCardPopup.open()
  //addCardFormValidator.resetValidation();                  
  //openPopup(popupAddCard);   
  //popupInputImgName.value = '';
  //popupInputImgLink.value = '';  
});


                               





