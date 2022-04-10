class Api {
  constructor({ baseUrl, headers }) {
    this._headers = headers
    this._baseUrl = baseUrl
  }

  //1 Загрузка информации о пользователе с сервера
  getProfile() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
      .then(res => res.ok ? res.json() : Promise.reject(res.status))
      .catch(console.log)
  }

  //2 Загрузка карточек с сервера
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers
    })
      .then(res => res.ok ? res.json() : Promise.reject(res.status))
      .catch(console.log)
  }

  //3 Редактирование профиля
  editProfile(name, about) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name,
        about
      })
    })
      .then(res => res.ok ? res.json() : Promise.reject(res.status))
      .catch(console.log)
  }

  //4 Добавление новой карточки
  addCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
      .then(res => res.ok ? res.json() : Promise.reject(res.status))
      .catch(console.log)
  }

  //7 Удаление карточки
  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })

      .then(res => res.ok ? res.json() : Promise.reject(res.status))
      .catch(console.log)
  }

  //8 Постановка и снятие лайка
  addLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: 'PUT',
      headers: this._headers
    })

      .then(res => res.ok ? res.json() : Promise.reject(res.status))
      .catch(console.log)
  }

  deleteLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })

      .then(res => res.ok ? res.json() : Promise.reject(res.status))
      .catch(console.log)
  }

  //9 Обновление аватара пользователя
  updateAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar
      })
    })
      .then(res => res.ok ? res.json() : Promise.reject(res.status))
      .catch(console.log)
  }
}

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-39',
  headers: {
    authorization: 'b3fe3307-0db2-4d0f-88cc-23b402b89c40',
    'Content-Type': 'application/json'
  }
});