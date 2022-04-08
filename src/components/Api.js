class Api {
  constructor({ baseUrl, headers }) {
    this._headers = headers
    this._baseUrl = baseUrl
  }

  //1
  getProfile() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
    .then(res => res.ok ? res.json() : Promise.reject(res.status))
    .catch(console.log)
  }

  getInitialCards() {
    // ...
  }

  // другие методы работы с API
}

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-39',
  headers: {
    authorization: 'b3fe3307-0db2-4d0f-88cc-23b402b89c40',
    'Content-Type': 'application/json'
  }
}); 