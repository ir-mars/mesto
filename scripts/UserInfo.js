export class UserInfo {
    constructor({userNameSelector, userDescriptionSelector}) {
        this._userNameSelector = document.querySelector(userNameSelector);
        this._userDescriptionSelector = document.querySelector(userDescriptionSelector);
    }

    getUserInfo() {
        return {
            name: this._userNameSelector.textContent,
            description: this._userDescriptionSelector.textContent
        }
    }

    setUserInfo() {
        this._userNameSelector.textContent = name;
        this._userDescriptionSelector.textContent = description;
    }
}