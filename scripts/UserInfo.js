export class UserInfo {
    constructor({name, description}) {
        this._name = document.querySelector(name);
        this._description = document.querySelector(description);
    }

    getUserInfo() {
        /*return {
            name: this._name.textContent,
            description: this._description.textContent
        }*/
        const user = {};
        user.name = this._name.textContent,
        user.description = this._description.textContent;

        return user;
    }

    setUserInfo(value) {
        this._name.textContent = value.name,                //+
        this._description.textContent = value.description;
    }
}