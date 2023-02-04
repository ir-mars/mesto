export class UserInfo {
    constructor({name, description}) {
        this._name = document.querySelector(name);
        this._description = document.querySelector(description);
    }

    getUserInfo() {
        return {
            name: this._name.textContent,
            description: this._description.textContent
        }
        /*const userInfo = {};
        userInfo.name = this._userName.textContent,
        userInfo.description = this._userDescription.textContent;

        return userInfo;*/
    }

    setUserInfo() {
        this._name.textContent = name,
        this._description.textContent = description;
    }
}