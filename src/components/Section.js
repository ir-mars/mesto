export class Section {
    constructor({renderer}, selector) {    
        this._renderer = renderer;                           //ф-я, отрисовка карточки  
        this._container = document.querySelector(selector);  //dom-элемент
    }
    
    renderCards(items) {                                  //отрисовка всех элементов на странице
        items.forEach((item) => {
            this._renderer(item);
        });
    }

    addItem(card) {                                 //принимает dom-элемент и добавляет его
        this._container.prepend(card);
    }
}