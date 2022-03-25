export class UserInfo {
  constructor({ nameSelector, descriptionSelector }) {
    this._name = document.querySelector(nameSelector);
    this._description = document.querySelector(descriptionSelector);
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
  };
};