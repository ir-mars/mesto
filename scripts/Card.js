export class Card {
    constructor (data, cardTemplateSelector, handleImgClick) {      // data: name, link
        this._cardTemplateSelector = cardTemplateSelector;
        this._data = data;
        this._handleImgClick = handleImgClick;
    }

    _handleLikeCard = (event) => {
        event.target.classList.toggle('card__like-button_active');
    };

    _handleDeleteCard = (event) => {
        this._newCard.remove();             //event.target.closest('.card').remove();
        this._newCard = null;
    };

    _getCardTemplate = () => {
        return document.querySelector(this._cardTemplateSelector).content.querySelector('.card');
    }

    _addEventListeners() {
        this._cardLikeButton = this._newCard.querySelector('.card__like-button');
        this._cardDeleteButton = this._newCard.querySelector('.card__delete-button');
        this._cardLikeButton.addEventListener('click', this._handleLikeCard);
        this._cardDeleteButton.addEventListener('click', this._handleDeleteCard);
        this._cardImage.addEventListener('click', () => this._handleImgClick(this._data.name, this._data.link));
    }

    generateCard() {
        const cardTemplate = this._getCardTemplate();
        this._newCard = cardTemplate.cloneNode(true);   
        this._cardImage = this._newCard.querySelector('.card__image');
        this._cardTitle = this._newCard.querySelector('.card__title');
              
        this._cardTitle.textContent = this._data.name; 
        this._cardImage.src = this._data.link; 
        this._cardImage.alt = this._data.name; 

        this._addEventListeners();
      
        return this._newCard; 
    }
}