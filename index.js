(()=>{"use strict";var e={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},t=document.querySelector(".popup_profile").querySelector(".popup__form"),n=document.querySelector(".popup_place").querySelector(".popup__form"),r=document.querySelector(".profile__edit-button"),o=document.querySelector(".profile__add-button");function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=n,this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inputs=Array.from(this._form.querySelectorAll(this._inputSelector)),this._button=this._form.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showErrorMessage",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),t.classList.add(this._errorClass),t.textContent=e.validationMessage}},{key:"_hideErrorMessage",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideErrorMessage(e):this._showErrorMessage(e)}},{key:"checkButtonValidity",value:function(){this._form.checkValidity()?(this._button.classList.remove(this._inactiveButtonClass),this._button.disabled=!1):(this._button.classList.add(this._inactiveButtonClass),this._button.disabled=!0)}},{key:"_setEventListeners",value:function(){var e=this;this._inputs.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e.checkButtonValidity()}))}))}},{key:"resetForm",value:function(){var e=this;this._form.reset(),this._inputs.forEach((function(t){e._hideErrorMessage(t)}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=function(){function e(t,n,r){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s(this,"_handleToggleLike",(function(){o._likeButton.classList.toggle("card__like_active")})),s(this,"_handleDelete",(function(){o._newCard.remove(),o._newCard=null})),this._template=document.querySelector(n).content.querySelector(".card"),this._data=t,this._handleCardClick=r}var t,n;return t=e,(n=[{key:"_addListeners",value:function(){var e=this;this._deleteButton.addEventListener("click",this._handleDelete),this._likeButton.addEventListener("click",this._handleToggleLike),this._cardImage.addEventListener("click",(function(){e._handleCardClick(e._data)}))}},{key:"createCard",value:function(){return this._newCard=this._template.cloneNode(!0),this._likeButton=this._newCard.querySelector(".card__like"),this._deleteButton=this._newCard.querySelector(".card__delete"),this._cardImage=this._newCard.querySelector(".card__image"),this._newCard.querySelector(".card__title").innerText=this._data.name,this._cardImage.setAttribute("src",this._data.link),this._cardImage.setAttribute("alt",this._data.name),this._addListeners(),this._newCard}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(t){var n=t.nameSelector,r=t.descriptionSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._description=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,description:this._description.textContent}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._description.textContent=e.description}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t,n){var r,o,i=this,a=t.items,c=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o=function(e){i._container.prepend(e)},(r="addItem")in this?Object.defineProperty(this,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):this[r]=o,this._items=a,this._renderer=c,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"rendererElements",value:function(){var e=this;this._items.forEach((function(t){var n=e._renderer(t);e.addItem(n)}))}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popup=document.querySelector(t)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){(t.target.classList.contains("popup__close-button")||t.target===t.currentTarget)&&e.close()}))}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function v(e,t){return v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},v(e,t)}function b(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=w(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},g.apply(this,arguments)}function w(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(i,e);var t,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(n);if(r){var o=k(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return b(this,e)});function i(e){var t,n,r,a,c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),c=function(e){n._imagePopupViewImage.src=e.link,n._imagePopupViewImage.alt=e.name,n._captionPopupViewImage.textContent=e.name,g((t=m(n),k(i.prototype)),"open",t).call(t)},(a="open")in(r=m(n=o.call(this,e)))?Object.defineProperty(r,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):r.open=c,n._imagePopupViewImage=n._popup.querySelector(".popup__image"),n._captionPopupViewImage=n._popup.querySelector(".popup__caption"),n}return t=i,Object.defineProperty(t,"prototype",{writable:!1}),t}(y);function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=j(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},O.apply(this,arguments)}function j(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=I(e)););return e}function P(e,t){return P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},P(e,t)}function L(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=I(r);if(o){var n=I(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return L(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._form=n._popup.querySelector(".popup__form"),n._callbackSubmitForm=t,n._popupInputs=n._popup.querySelectorAll(".popup__input"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e,t={};return null!==(e=this._popupInputs)&&void 0!==e&&e.length&&this._popupInputs.forEach((function(e){t[e.getAttribute("name")]=e.value})),t}},{key:"setInputValues",value:function(e){var t;null!==(t=this._popupInputs)&&void 0!==t&&t.length&&this._popupInputs.forEach((function(t){var n=t.getAttribute("name");e[n]&&(t.value=e[n])}))}},{key:"setEventListeners",value:function(){var e=this;O(I(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){var n=e._getInputValues();e._callbackSubmitForm(t,n),e.close()}))}},{key:"close",value:function(){O(I(a.prototype),"close",this).call(this),this._form.reset()}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(y);function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}new(function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._headers=r,this._baseUrl=n}var t,n;return t=e,(n=[{key:"getProfile",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"getInitialCards",value:function(){}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-39",headers:{authorization:"b3fe3307-0db2-4d0f-88cc-23b402b89c40","Content-Type":"application/json"}}).getProfile().then((function(e){M.setUserInfo({name:e.name,description:e.about})}));var V=new E(".popup_view-image");V.setEventListeners();var x=new q(".popup_profile",(function(e,t){e.preventDefault(),M.setUserInfo(t)}));x.setEventListeners();var R=new q(".popup_place",(function(e,t){e.preventDefault();var n=A(t);U.addItem(n)}));R.setEventListeners();var T=new a(e,t),D=new a(e,n);T.enableValidation(),D.enableValidation();var U=new d({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:A},".gallery");function A(e){if(e.name&&e.link)return new u(e,".template",V.open).createCard()}U.rendererElements();var M=new p({nameSelector:".profile__title",descriptionSelector:".profile__subtitle"});r.addEventListener("click",(function(){T.resetForm(),x.setInputValues(M.getUserInfo()),T.checkButtonValidity(),x.open()})),o.addEventListener("click",(function(){D.resetForm(),D.checkButtonValidity(),R.open()}))})();