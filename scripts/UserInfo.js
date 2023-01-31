export class UserInfo {
    constructor({userNameSelector, userDescriptionSelector}) {
        this._userNameSelector = document.querySelector(userNameSelector);
        this._userDescriptionSelector = document.querySelector(this._userDescriptionSelector);
    }

    getUserInfo() {
        return {
            name: this._userName.textContent,
            description: this._userDescriptionSelector.textContent
        }
    }

    setUserInfo() {
        this._userName.textContent = name;
        this._userDescriptionSelector.textContent = description;
    }
}