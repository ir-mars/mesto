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

/*-------------------------------------------------*/

//открыть просмотр попапа с картинкой
const handleCardClick = (name, link) => {                 
  popupWithImage.open(name, link);   
};

//удаляем карточку
const handleDeleteClick = () => {
  popupDeleteCard.open();
  popupDeleteCard.handleFormSubmit(() => {
    return api.deleteCard(card.getCardId())
      .then(() => {
        card.deleteCard();
      })
      .catch((err) => {
        console.log(err);
      })
  })
}

/*---------------------------------------------------------------*/
//сабмит добавления карточки
const handleSubmitAddCard = (values) => {
  addCardPopup.setText('Сохранение..')
  api.addCard(values.name, values.link)
    .then((res) => {
      createCard(res);
      addCardPopup.close();
    })   
  //renderCard(values);
  //console.log('values =>', values)  
    .finally(() => {
      addCardPopup.setText('Сохранить')
    })              
};

//сабмит профиля
const handleSubmitProfile = (values) => {
  editProfilePopup.setText('Сохранение..');
  const {name, about} = values;   
  api.sendUserInfo(name, about)
    .then((res) => {
      userInfo.setUserInfo(res.name, res.about)
      editProfilePopup.close();
    })
    .finally(() => {
      editProfilePopup.setText('Сохранить')
    })
};

//сабмит аватара
const handleSubmitAvatar = (value) => {
  editAvatarPopup.setText('Сохранение..')
  api.setAvatar(value.url)
    .then((res) => {
      userInfo.setAvatar(res.avatar)
      editAvatarPopup.close()
    })
    .catch((err) => {
      console.log(err)      
    })
    .finally(() => {
      editAvatarPopup.setText('Сохранить')
    })
}

//удаления карточки
/*
const handleDeleteClick = (card) => {
  popupDeleteCard.open();
  popupDeleteCard.handleSubmit(() => {
    api.deleteCard(card.getCardId())
      .then(() => {
        card.deleteCard()
        popupDeleteCard.close()
      })
      .catch
  })
};*/

/*----------вставка контента----------*/                      

const createCard = (data) => {
  const card = new Card(
    data, templateSelector, handleCardClick,
    handleDeleteClick,
    {
      handleLikeClick: (id) => {
        //console.log(card.isMyLike())
        if (card.isMyLike()) {
          
          api.removeLike(id)
          .then((res) => {
            card.setLikes(res.likes)
          })
          .catch((err) => {
            console.log(err);
          })
        } else {
          api.setLike(id)
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


/*---------------------------------------------*/
api.setAvatar(avatar)
    .then((res) => {
      userInfo.setUserInfo(res)
    })    

api.sendUserInfo()
  .then((name, about) => {
    userInfo.setUserInfo(name, about)
  })

api.getUserInfo()
  .then((name, about) => {
    userInfo.setUserInfo(name, about);
    //console.log(userInfo)
  })
  

api.getInitialCards()
.then((data) => {
    cardSection.renderCards(data)})

/*-----------создание экземпляров-------------*/

const userInfo = new UserInfo({
  nameSelector: '.profile__title',
  aboutSelector: '.profile__subtitle',
  avatarSelector: '.profile__image'         //
});

const popupWithImage = new PopupWithImage('.popup_type_image')   
popupWithImage.setEventListeners();

const editProfilePopup = new PopupWithForm('.popup_type_edit-profile', handleSubmitProfile)  
editProfilePopup.setEventListeners();

const editAvatarPopup = new PopupWithForm('.popup_type_avatar', handleSubmitAvatar)
editAvatarPopup.setEventListeners();

const addCardPopup = new PopupWithForm('.popup_type_add-card', handleSubmitAddCard)    
addCardPopup.setEventListeners();

const avatarEditPopup = new PopupWithForm('.popup_type_avatar', handleSubmitAvatar) //
avatarEditPopup.setEventListeners();

const popupDeleteCard = new PopupWithConfirmation('.popup_type_confirm');
popupDeleteCard.setEventListeners();

const cardSection = new Section({renderer: renderCard}, '.cards')

/*-----------валидация----------------------*/

const addCardFormValidator = new FormValidator(validationConfig, popupCardForm)

const editProfileFormValidator = new FormValidator(validationConfig, popupProfileForm)
editProfileFormValidator.enableValidation()

const avatarFormValidator = new FormValidator(validationConfig, popupAvatarForm)
avatarFormValidator.enableValidation()

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



