export class UserInfo {
  constructor({ nameSelector, descriptionSelector, avatarSelector }) {
    this._name = document.querySelector(nameSelector);
    this._description = document.querySelector(descriptionSelector);
    this._avatar = document.querySelector(avatarSelector);
  };

  // получение значений полей
  getUserInfo() {
    const userInfo = {
      name: this._name.textContent,
      description: this._description.textContent
    };

    return userInfo;
  };

  // сохранение значений
  setUserInfo(data) {
    this._name.textContent = data.name;
    this._description.textContent = data.description;
    this._avatar.src = data.avatar
  };
};