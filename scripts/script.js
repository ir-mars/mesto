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
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupAddCard = document.querySelector('.popup_type_add-card');
const popupImage = document.querySelector('.popup_type_image');

//profile edit elements
const popupProfileEditButton = document.querySelector('.profile__edit-button');
const popupProfileCloseButton = popupEditProfile.querySelector('.popup__close-btn');
const popupInputName = popupEditProfile.querySelector('.popup__input_type_name');
const popupInputDescription = popupEditProfile.querySelector('.popup__input_type_description');
const formEditProfile = document.querySelector('.popup__form_type_edit-profile');

//profile elements
const profileElement = document.querySelector('.profile');
const profileTitleElement = profileElement.querySelector('.profile__title');
const profileSubtitleElement = profileElement.querySelector('.profile__subtitle');

//add card elements
const popupAddCardButton = document.querySelector('.profile__add-button');
const popupAddCardCloseButton = popupAddCard.querySelector('.popup__close-btn');
const popupInputImgName = popupAddCard.querySelector('.popup__input_type_img-name');
const popupInputImgLink = popupAddCard.querySelector('.popup__input_type_img-link');
const formAddCard = document.querySelector('.popup__form_type_add-card');

//image popup elements
const popupImageCloseButton = popupImage.querySelector('.popup__close-btn');
const popupImageContainer = document.querySelector('.popup__img-container');
const popupOpenImage = popupImageContainer.querySelector('.popup__big-img');
const popupOpenImageSubtitle = popupImageContainer.querySelector('.popup__caption');

const cardsContainer = document.querySelector('.cards');
const cardTemplate = document.querySelector('.card-template').content.querySelector('.card'); //template-шаблон



//закрытие попапа с помощью escape
const closePopupByEsc = (evt) => {
  const openedPopup = document.querySelector('.popup_is-opened');
  if (evt.key === 'Escape') {
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
  openPopup(popupAddCard);
  popupInputImgName.value = '';
  popupInputImgLink.value = '';
});

popupAddCardCloseButton.addEventListener('click', function() {
  closePopup(popupAddCard);
});

const handleSubmitAddCard = (event) => {
    event.preventDefault();
    renderCard({
        name: popupInputImgName.value,
        link: popupInputImgLink.value
    });
    closePopup(popupAddCard);
};

//попап с картинкой
const handleImagePopup = (event) => {
  openPopup(popupImage);
  popupOpenImage.src = event.target.src;
  popupOpenImage.alt = event.target.closest('.card').querySelector('.card__title').textContent;
  popupOpenImageSubtitle.textContent = event.target.closest('.card').querySelector('.card__title').textContent;
};

popupImageCloseButton.addEventListener('click', function() {
  closePopup(popupImage);
});

//переключение лайка у картинки
const handleLikeCard = (event) => {
  event.target.classList.toggle('card__like-button_active');
};

//удаление картинки (корзина)
const handleDeleteCard = (event) => {
  event.target.closest('.card').remove();
};


//генерация карточки
const generateCard = (card) => { 
  const newCard = cardTemplate.cloneNode(true);   
  const cardImage = newCard.querySelector('.card__image');
  const cardTitle = newCard.querySelector('.card__title');
  const cardLikeButton = newCard.querySelector('.card__like-button');
  const cardDeleteButton = newCard.querySelector('.card__delete-button');

  cardTitle.textContent = card.name;
  cardImage.src = card.link;
  cardImage.alt = card.name;

  cardLikeButton.addEventListener('click', handleLikeCard);
  cardDeleteButton.addEventListener('click', handleDeleteCard);
  cardImage.addEventListener('click', handleImagePopup);
  return newCard;
};

const renderCard = (card) => {
  cardsContainer.prepend(generateCard(card));
};

initialCards.forEach((card) => {
  renderCard(card);
});


popupEditProfile.addEventListener('click', closePopupByOverlay);
popupAddCard.addEventListener('click', closePopupByOverlay);
popupImage.addEventListener('click', closePopupByOverlay);

formEditProfile.addEventListener('submit', handleSubmitProfile);
formAddCard.addEventListener('submit', handleSubmitAddCard);










