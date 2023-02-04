export class Section {
    constructor({items, renderer}, selector) {    
        this._items = items;                          //массив данных initialCards
        this._renderer = renderer;                           //ф-я, отрисовка карточки  
        this._container = document.querySelector(selector);  //dom-элемент
    }
    
    renderCards() {                                  //отрисовка всех элементов на странице
        this._items.forEach((item) => {
            this._renderer(item);
        });
    }

    addItem(card) {                                 //принимает dom-элемент и добавляет его
        this._container.prepend(card);
    }
}