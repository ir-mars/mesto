import './index.css';

import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithConfirmation, popupWithConfirmation } from '../components/PopupWithConfirmation.js';
import { Api } from '../components/Api.js';

import {
  popupProfileEditButton,
  popupInputName,
  popupInputDescription,
  popupProfileForm,
  popupAddCardButton,
  popupCardForm,
  popupAvatarForm,
  avatarEditButton,
  templateSelector,
} from '../utils/constants.js';

import { validationConfig } from '../utils/constants.js'

const renderCard = (data) => {               
  const cardEl = createCard(data);
  const card = cardEl.generateCard();  
  cardSection.addItem(card);
};

const api = new Api ({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-59',
  headers: {
      authorization: '53eceee5-1c39-4ee0-babf-ca8a3ddb3e6e',
      'Content-Type': 'application/json',
  }
})

Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(([data, name, about]) => {
    userInfo.setUserInfo(name, about);
    cardSection.renderCards(data)
  })
  .catch((err) => {
    console.log(err)
  }); 
  
/*-------------------------------------------------*/

//открыть просмотр попапа с картинкой
const handleCardClick = (name, link) => {                 
  popupWithImage.open(name, link);   
};

/*----------вставка контента----------*/                      

const createCard = (data) => {
  const card = new Card(
    data, templateSelector, handleCardClick, userInfo.getUserId(),         ///////////передаем userId при создании карточки
    {
      handleDeleteClick: (id) => {
        popupDeleteCard.open();
        popupDeleteCard.handleSubmit(() => {
          return api.deleteCard(id)
            .then(() => {
              //console.log
              card.removeCard();
            })
            .catch((err) => {
              console.log(err);
            })
        })
      },

      handleLikeClick: (_id) => {
        //console.log(card.isMyLike())
        if (card.isMyLike()) {
          
          api.removeLike(_id)
          .then((res) => {
            card.setLikes(res.likes)
          })
          .catch((err) => {
            console.log(err);
          })
        } else {
          api.setLike(_id)
          .then((res) => {
            card.setLikes(res.likes)
          })
          .catch((err) => {
            console.log(err)
          })
        }
      }
    });
  return card;
}
//console.log(createCard)

/*---------------------------------------------------------*/

const userInfo = new UserInfo({
  nameSelector: '.profile__title',
  aboutSelector: '.profile__subtitle',
  avatarSelector: '.profile__image'         
});

const popupWithImage = new PopupWithImage('.popup_type_image')   
popupWithImage.setEventListeners();

const editProfilePopup = new PopupWithForm('.popup_type_edit-profile', {   
  handleSubmit: (userData) => {
    api.sendUserInfo(userData)
      .then((res) => {
        userInfo.setUserInfo(res)
        editProfilePopup.close();
      })
      .catch((err) => {
        console.log(err);
      })
  }
})
editProfilePopup.setEventListeners();

const addCardPopup = new PopupWithForm('.popup_type_add-card', {                 
  handleSubmit: (cardData) =>{
    return api.addCard(cardData)
      .then((newCardData) => {
        cardSection.renderCards([newCardData]) 
      })
      .catch((err) => {
        console.log(err)
      })
  }})    
addCardPopup.setEventListeners();

const avatarEditPopup = new PopupWithForm('.popup_type_avatar', {              
  handleSubmit: (avatarData) => {
    return api.setAvatar(avatarData)
      .then((res) => {
        userInfo.setAvatar(res)
        avatarEditPopup.close()
      })
      .catch((err) => {
        console.log(err)      
      })
      
  }
}) 
avatarEditPopup.setEventListeners();

const popupDeleteCard = new PopupWithConfirmation('.popup_type_confirm');
popupDeleteCard.setEventListeners();

const cardSection = new Section({renderer: renderCard}, '.cards')          

/*-----------валидация----------------------*/

const addCardFormValidator = new FormValidator(validationConfig, popupCardForm)
addCardFormValidator.enableValidation();

const editProfileFormValidator = new FormValidator(validationConfig, popupProfileForm)
editProfileFormValidator.enableValidation();

const avatarFormValidator = new FormValidator(validationConfig, popupAvatarForm)
avatarFormValidator.enableValidation();

/*-----------слушатели клика-------------*/

popupProfileEditButton.addEventListener('click', () => {         
  const user = userInfo.getUserInfo();
  popupInputName.value = user.name,
  popupInputDescription.value = user.about;
  editProfileFormValidator.resetValidation();                //сброс ошибок
  editProfilePopup.open();
});

popupAddCardButton.addEventListener('click', () => {             
  addCardFormValidator.resetValidation();                    //сброс ошибок
  addCardPopup.open();  
});

avatarEditButton.addEventListener('click', () => {
  avatarFormValidator.resetValidation();
  avatarEditPopup.open();
})    



