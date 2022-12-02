const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

const templateElement = document.querySelector('.element-template').content.querySelector('.element');

function initialCardsCreate(item) { // функция
const elementElement = templateElement.cloneNode(true); //клонируем содержимое тега template  
const elementIimageElement = elementElement.querySelector('.element__image');
const elementTitleElement = elementElement.querySelector('.element__title');
const elementLikeButtonElement = elementElement.querySelector('.element__like-button');
const elementDeleteButtonElement = elementElement.querySelector('.element__delete-button');

elementTitleElement.textContent = item.name;
elementIimageElement.src = item.link;
elementIimageElement.alt = item.name;

return elementElement;
};


/*пятый спринт
const popupElement = document.querySelector('.popup'); //меняем на All
const popupCloseButtonElement = popupElement.querySelector('.popup__close-btn'); //меняем на All
const popupOpenButtonElement = document.querySelector('.profile__edit-button');

const popupInputName = popupElement.querySelector('.popup__input_type_name');
const popupInputDescription = popupElement.querySelector('.popup__input_type_description');

const profileElement = document.querySelector('.profile');
const profileTitleElement = profileElement.querySelector('.profile__title');
const profileSubtitleElement = profileElement.querySelector('.profile__subtitle');

const formElement = document.querySelector('.popup__form');  */

//const likeImageButtonElement = document.querySelector('.element__like-button'); //срабатывает только на первом элементе (( 
//const deleteImageButtonElement = document.querySelector('.element__delete-button');
// заменить document на название блока (где находятся карточки)
//console.log(likeButtonElement);
//likeImageButtonElement.addEventListener('click', function(evt) {
//    evt.target.classList.toggle('element__like-button_active'); //???
//})

/*пятый спринт
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

formElement.addEventListener('submit', formSubmitHandler);*/




