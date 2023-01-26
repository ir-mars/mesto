import { FormValidator } from './FormValidator.js'
import { Card } from './Card.js'

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
   
//popups
const popupElement = document.querySelector('.popup');

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
const editProfileForm = popupEditProfile.querySelector('.popup__form');      

//add card
const popupAddCard = document.querySelector('.popup_type_add-card');
const popupAddCardButton = document.querySelector('.profile__add-button');
const popupAddCardCloseButton = popupAddCard.querySelector('.popup__close-btn');
const popupInputImgName = popupAddCard.querySelector('.popup__input_type_img-name');
const popupInputImgLink = popupAddCard.querySelector('.popup__input_type_img-link');
const formAddCard = document.querySelector('.popup__form_type_add-card');
const addCardForm = popupAddCard.querySelector('.popup__form');   

//image popup
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

const addCardFormValidator = new FormValidator(validationConfig, addCardForm)
const editProfileFormValidator = new FormValidator(validationConfig, editProfileForm)

addCardFormValidator.enableValidation()
editProfileFormValidator.enableValidation()

//закрытие попапа с помощью escape
const closePopupByEsc = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    closePopup(openedPopup);
  }
};

//закрытие попапа оверлей
const closePopupByOverlay = (evt) => {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.currentTarget);
  }
};

//открытие попапа
const openPopup = function (popup) {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', closePopupByEsc);  
};

//закрытие попапа
const closePopup = function (popup) {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closePopupByEsc);  
};

//попап редактирования профиля
popupProfileEditButton.addEventListener('click', function(){
  openPopup(popupEditProfile);
  popupInputName.value = profileTitleElement.textContent;
  popupInputDescription.value = profileSubtitleElement.textContent;
});

popupProfileCloseButton.addEventListener('click', function() {
  closePopup(popupEditProfile);
});

const handleSubmitProfile = (event) => {
  event.preventDefault();
  profileTitleElement.textContent = popupInputName.value;
  profileSubtitleElement.textContent = popupInputDescription.value;
  closePopup(popupEditProfile);
};

//попап добавления карточки
popupAddCardButton.addEventListener('click', function() {
  addCardFormValidator.resetValidation();                  
  openPopup(popupAddCard);   
  popupInputImgName.value = '';
  popupInputImgLink.value = '';  
});

popupAddCardCloseButton.addEventListener('click', function() {
  closePopup(popupAddCard);
});

const handleSubmitAddCard = (event) => {
    renderCard({
        name: popupInputImgName.value,
        link: popupInputImgLink.value
    });
    closePopup(popupAddCard);
    event.target.reset();                
};                                    

//попап с картинкой
const handleImagePopup = (name, link) => {         
  popupOpenImage.src =  link;                           
  popupOpenImage.alt =  name;                          
  popupOpenImageSubtitle.textContent = name;
  openPopup(popupImage);   
};

popupImageCloseButton.addEventListener('click', function() {
  closePopup(popupImage);
});

const renderCard = (data) => {               
  const cardEl = new Card(data, templateSelector, handleImagePopup);
  const card = cardEl.generateCard();
  cardsContainer.prepend(card);                     //вставили на страницу
};

initialCards.forEach((data) => {
  renderCard(data);                   
});

popupEditProfile.addEventListener('click', closePopupByOverlay);
popupAddCard.addEventListener('click', closePopupByOverlay);
popupImage.addEventListener('click', closePopupByOverlay);

formEditProfile.addEventListener('submit', handleSubmitProfile);
formAddCard.addEventListener('submit', handleSubmitAddCard);










