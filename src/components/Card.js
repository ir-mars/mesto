export class Card {
    constructor (data, templateSelector, handleCardClick) {      // data: name, link
        this._templateSelector = templateSelector;
        this._data = data;
        this._handleCardClick = handleCardClick;
    }

    _handleLikeCard = () => {
        this._cardLikeButton.classList.toggle('card__like-button_active');
    };

    _handleDeleteCard = () => {
        this._newCard.remove();             
        this._newCard = null;
    };

    _getCardTemplate = () => {
        return document.querySelector(this._templateSelector).content.querySelector('.card');
    }

    _setEventListeners() {
        this._cardLikeButton = this._newCard.querySelector('.card__like-button');
        this._cardDeleteButton = this._newCard.querySelector('.card__delete-button');
        this._cardLikeButton.addEventListener('click', this._handleLikeCard);
        this._cardDeleteButton.addEventListener('click', this._handleDeleteCard);
        this._cardImage.addEventListener('click', () => this._handleCardClick(this._data.name, this._data.link));
    }

    generateCard() {
        const cardTemplate = this._getCardTemplate();
        this._newCard = cardTemplate.cloneNode(true);   
        this._cardImage = this._newCard.querySelector('.card__image');
        this._cardTitle = this._newCard.querySelector('.card__title');
              
        this._cardTitle.textContent = this._data.name; 
        this._cardImage.src = this._data.link; 
        this._cardImage.alt = this._data.name; 

        this._setEventListeners();
      
        return this._newCard; 
    }
}