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
//console.log(popupEditProfile, popupAddCard, popupImage);

//popup close button
const popupProfileCloseButton = popupEditProfile.querySelector('.popup__close-btn');
const popupAddCardCloseButton = popupAddCard.querySelector('.popup__close-btn');
const popupImageCloseButton = popupImage.querySelector('.popup__close-btn');
//console.log(popupProfileCloseButton, popupAddCardCloseButton, popupImageCloseButton);

//popup open button
const popupProfileEditButton = document.querySelector('.profile__edit-button');
const popupAddCardButton = document.querySelector('.profile__add-button');
//console.log(popupProfileEditButton, popupAddCardButton);

//profile elements
const profileElement = document.querySelector('.profile');
const profileTitleElement = profileElement.querySelector('.profile__title');
const profileSubtitleElement = profileElement.querySelector('.profile__subtitle');
//console.log(profileElement, profileTitleElement, profileSubtitleElement);

//profile edit form
const popupInputName = popupEditProfile.querySelector('.popup__input_type_name');
const popupInputDescription = popupEditProfile.querySelector('.popup__input_type_description');
const formEditProfile = document.querySelector('.popup__form_type_edit-profile');
//console.log(popupInputName, popupInputDescription, formEditProfile);

//add card form
const popupInputImgName = popupAddCard.querySelector('.popup__input_type_img-name');
const popupInputImgLink = popupAddCard.querySelector('.popup__input_type_img-link');
const formAddCard = document.querySelector('.popup__form_type_add-card');
//console.log(popupInputImgName, popupInputImgLink, formAddCard);

//image popup elements
const popupImageContainer = document.querySelector('.popup__img-container');
const popupOpenImage = popupImageContainer.querySelector('.popup__big-img');
const popupOpenImageSubtitle = popupImageContainer.querySelector('.popup__caption');
//console.log(popupImageContainer, popupOpenImage, popupOpenImageSubtitle);

const cardsContainer = document.querySelector('.cards');
//console.log(cardsContainer);

//template шаблон
const cardTemplate = document.querySelector('.card-template').content.querySelector('.card');

//генерация карточки
const generateCard = (card) => { 
  const newCard = cardTemplate.cloneNode(true); //клонируем содержимое тега template  
  const cardImage = newCard.querySelector('.card__image');
  const cardTitle = newCard.querySelector('.card__title');
  const cardLikeButton = newCard.querySelector('.card__like-button');
  const cardDeleteButton = newCard.querySelector('.card__delete-button');

  cardTitle.textContent = card.name;
  cardImage.src = card.link;
  cardImage.alt = card.name;
  
  return newCard;
};

const handleSubmitAddCardForm = (event) => {
    event.preventDefault();
    renderCard({
        name: popupInputImgName.value,
        link: popupInputImgLink.value
    });
    closePopup();
};

const renderCard = (card) => {
    cardsContainer.prepend(generateCard(card));
};

initialCards.forEach((card) => {
    renderCard(card);
});












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

//шестой спринт
//const likeImageButtonElement = document.querySelector('.element__like-button'); //срабатывает только на первом элементе (( 
//const deleteImageButtonElement = document.querySelector('.element__delete-button');
// заменить document на название блока (где находятся карточки)
//console.log(likeButtonElement);
//likeImageButtonElement.addEventListener('click', function(evt) {
//    evt.target.classList.toggle('element__like-button_active'); //???
//})





