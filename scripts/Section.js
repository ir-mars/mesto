export class Section {
    constructor({items, renderer}, containerSelector) {
        this._initialCards = items;
        this._renderer = renderer;
        //this._container = document.querySelector(containerSelector);
    }
    
    renderCards() {
        this._initialCards.forEach((data) => {
            this._renderer(data);
        });
    }

    addItem(card) {
        this._container.prepend(card);
    }
}