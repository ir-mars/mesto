export class UserInfo {
    constructor({name, description}) {
        this._name = document.querySelector(name);
        this._description = document.querySelector(description);
        //console.log(this._name)
    }

    getUserInfo() {
        return {
            name: this._name.textContent,
            description: this._description.textContent
        }
    }

    setUserInfo(value) {
        this._name.textContent = value.name,                //+
        this._description.textContent = value.description;
    }
}