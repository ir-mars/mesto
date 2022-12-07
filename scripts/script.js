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

//popup close button
const popupProfileCloseButton = popupEditProfile.querySelector('.popup__close-btn');
const popupAddCardCloseButton = popupAddCard.querySelector('.popup__close-btn');
const popupImageCloseButton = popupImage.querySelector('.popup__close-btn');

//popup open button
const popupProfileEditButton = document.querySelector('.profile__edit-button');
const popupAddCardButton = document.querySelector('.profile__add-button');

//profile elements
const profileElement = document.querySelector('.profile');
const profileTitleElement = profileElement.querySelector('.profile__title');
const profileSubtitleElement = profileElement.querySelector('.profile__subtitle');

//profile edit form
const popupInputName = popupEditProfile.querySelector('.popup__input_type_name');
const popupInputDescription = popupEditProfile.querySelector('.popup__input_type_description');
const formEditProfile = document.querySelector('.popup__form_type_edit-profile');

//add card form
const popupInputImgName = popupAddCard.querySelector('.popup__input_type_img-name');
const popupInputImgLink = popupAddCard.querySelector('.popup__input_type_img-link');
const formAddCard = document.querySelector('.popup__form_type_add-card');

//image popup elements
const popupImageContainer = document.querySelector('.popup__img-container');
const popupOpenImage = popupImageContainer.querySelector('.popup__big-img');
const popupOpenImageSubtitle = popupImageContainer.querySelector('.popup__caption');

const cardsContainer = document.querySelector('.cards');

//template шаблон
const cardTemplate = document.querySelector('.card-template').content.querySelector('.card');

//переключение лайка
const handleLikeCard = (event) => {
  event.target.classList.toggle('card__like-button_active');
};

//удаление карточки (корзина)
const handleDeleteCard = (event) => {
  event.target.closest('.card').remove();
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


//открытие попапа
const openPopup = function (popup) {
  popup.classList.add('popup_is-opened');
};

//закрытие попапа
const closePopup = function (popup) {
  popup.classList.remove('popup_is-opened');
};

//попап редактирование профиля
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

formEditProfile.addEventListener('submit', handleSubmitProfile);


//попап добавление карточки
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

formAddCard.addEventListener('submit', handleSubmitAddCard);



/* пятый спринт
const openPopup = function () {
    popupElement.classList.add('popup_is-opened');
    popupInputName.value = profileTitleElement.textContent;
    popupInputDescription.value = profileSubtitleElement.textContent;
};

const closePopup = function () {
    popupElement.classList.remove('popup_is-opened');
};

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileTitleElement.textContent = popupInputName.value;
    profileSubtitleElement.textContent = popupInputDescription.value;
    closePopup();
};

formElement.addEventListener('submit', formSubmitHandler);
*/






