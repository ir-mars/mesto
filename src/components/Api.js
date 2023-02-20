export class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    };    
    
    //проверка ответа сервера
    _getResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    //загрузка cards с сервера
    getInitialCards() {
        return fetch(`${this._baseUrl}/cards/`, {
            headers: this._headers,
        })
        .then(res => this._getResponse(res))
    }
    
    //получение информации о пользователе с сервера
    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers,
        })
        .then(res => this._getResponse(res))
    }

    //изменение профиля
    sendUserInfo({name, about}) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name, 
                about,
            }),
        })
        .then(res => this._getResponse(res))
    }

    //добавление карточки
    addCard({name, link}) {
        return fetch(`${this._baseUrl}/cards/`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                link: link
            })
        })
        .then(res => this._getResponse(res))
    }

    //удаление карточки
    deleteCard(id) {
        return fetch(`${this._baseUrl}/cards/` + id, {
            method: 'DELETE',
            headers: this._headers
        })
        .then(res => this._getResponse(res))
    }

    //добавление лайка
    setLike(id) {
        return fetch(`${this._baseUrl}/cards/likes/` + id, {
            method: 'PUT',
            headers: this._headers
        })
        .then(res => this._getResponse(res))
    }

    removeLike(id) {
        return fetch(`${this._baseUrl}/cards/likes/` + id, {
            method: 'DELETE',
            headers: this._headers
        })
        .then(res => this._getResponse(res))
    }

    setAvatar({avatar}) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar,
            })
        })
        .then(res => this._getResponse(res))
    }
}