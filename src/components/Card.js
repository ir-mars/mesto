export class Card {
    constructor (data, templateSelector, handleCardClick, {handleDeleteClick, handleLikeClick}) { 
        this._templateSelector = templateSelector;
        this._cardData = data;
        this._name = data.name;
        this._link = data.link;
        this._id = data._id;                    //cardId
        this._ownerId = data.owner._id;
        this._userId = data.userId;
        this._likes = data.likes;
        this._handleCardClick = handleCardClick;
        this._handleDeleteClick = handleDeleteClick;
        this._handleLikeClick = handleLikeClick;        
    }
    
    _handleDeleteButtonSwitch = () => {
        this._cardDeleteButton.classList.add('card__delete-button_inactive');
    };    

    _getCardTemplate = () => {
        const cardTemplate = document.querySelector(this._templateSelector).content.querySelector('.card').cloneNode(true);
        return cardTemplate;
    }

    _setEventListeners() {
        //слушатель лайка
        this._cardLikeButton.addEventListener('click', () => { 
            this._handleLikeClick(this._id);
        });
        //слушатель клика на корзину                                                             
        this._cardDeleteButton.addEventListener('click', () => {
            this._handleDeleteClick(this._cardData);
        });                                                               
        this._cardImage.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link);             
        })    
    }

    generateCard() {
        this._newCard = this._getCardTemplate();   
        this._cardTitle = this._newCard.querySelector('.card__title');
        this._cardImage = this._newCard.querySelector('.card__image');
        this._cardLikeButton = this._newCard.querySelector('.card__like-button');
        this._cardDeleteButton = this._newCard.querySelector('.card__delete-button');
        this._cardLikeCounter = this._newCard.querySelector('.card__like-counter');
        if (this._ownerId !== this._userId) this._handleDeleteButtonSwitch();
        this.isLiked();
        this._cardLikeCounter.textContent = this._likes.length; 
        this._cardTitle.textContent = this._name;    
        this._cardImage.src = this._link;    
        this._cardImage.alt = this._name;   
                
        this._setEventListeners();
      
        return this._newCard; 
    }
    
    deleteCard = () => {
        this._newCard.remove();             
        this._newCard = null;
    };

    getCardId() {
        return this._cardId;
    }

    //проверка есть/нет лайк пользователя        
    isLiked() {
        if(this._userLike()) {
            this._cardLikeButton.classList.add('card__like-button_active');
        } else {
            this._cardLikeButton.classList.remove('card__like-button_active');
        }
    }
  
    _userLike() {
        return this._likes.some((user) => user._id === this._userId)
    }

    _likeSwitch() {
        this._cardLikeButton.classList.toggle('card__like-button_active');      
    }

    setLikes(array) {
        this._likes = array
        this._cardLikeCounter.textContent = this._likes.length;
        this._likeSwitch();
    }

    isMyLike() {
        return this._likes.some((like) => like._id === this._userId);
    }
    
/*
    
  
*/

}