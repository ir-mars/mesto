export class UserInfo {
    constructor({nameSelector, aboutSelector, avatarSelector}) {
        this._profileName = document.querySelector(nameSelector);
        this._profileAbout = document.querySelector(aboutSelector);
        //console.log(this._profileName)
        this._profileAvatar = document.querySelector(avatarSelector);
    }

    getUserInfo() {
        const userData = {
            name: this._profileName.textContent,
            about: this._profileAbout.textContent,
            //avatar: this._profileAvatar.src
        }
        return userData;
    }

    setUserInfo({name, about, avatar, _id}) {   //values
        this._profileName.textContent = name,                
        this._profileAbout.textContent = about,
        this._profileAvatar.src = avatar,
        this._userId = _id
    }

    getUserId() {
        return this._userId
    }

    setAvatar() {
        this._profileAvatar.src = link;
    }
}