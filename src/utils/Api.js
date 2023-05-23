import { baseUrl, myToken } from "./constants";

class Api {
	constructor(config) {
		this._url = config.url;
		this._headers = config.headers;
	};

	_getResponseData(res) {
		if (res.ok) {
			return res.json();
		};
		return Promise.reject(`Ошибка: ${res.status}`);
	};

	getInitialCards() {
		return fetch(`${this._url}/cards`, {
			method: "GET",
			headers: this._headers
		})
			.then((res) =>
				this._getResponseData(res)
			)
	};

	getUserData() {
		return fetch(`${this._url}/users/me`, {
			method: "GET",
			headers: this._headers
		})
			.then((res) =>
				this._getResponseData(res)
			)
	};

	updateUserData(userData) {
		return fetch(`${this._url}/users/me`, {
			method: "PATCH",
			headers: this._headers,
			body: JSON.stringify(userData)
		})
			.then((res) =>
				this._getResponseData(res)
			)
	};

	sendingCard(userData) {
		return fetch(`${this._url}/cards`, {
			method: 'POST',
			headers: this._headers,
			body: JSON.stringify(userData),
		})
			.then((res) =>
				this._getResponseData(res)
			)
	};

	_likeCard(cardId) {
		return fetch(`${this._url}/cards/${cardId}/likes`, {
			method: "PUT",
			headers: this._headers
		})
			.then((res) =>
				this._getResponseData(res)
			)
	};

	_unlikeCard(cardId) {
		return fetch(`${this._url}/cards/${cardId}/likes`, {
			method: "DELETE",
			headers: this._headers
		})
			.then((res) =>
				this._getResponseData(res)
			)
	};

	changeLikeCardStatus(cardId, isLiked) {
		return isLiked ? this._likeCard(cardId) : this._unlikeCard(cardId)
	};

	deleteCard(cardId) {
		return fetch(`${this._url}/cards/${cardId}`, {
			method: "DELETE",
			headers: this._headers
		})
			.then((res) =>
				this._getResponseData(res)
			)
	};

	updateUserAvatar(data) {
		return fetch(`${this._url}/users/me/avatar`, {
			method: "PATCH",
			headers: this._headers,
			body: JSON.stringify({
				avatar: data["avatar"]
			})
		})
			.then((res) =>
				this._getResponseData(res)
			)
	};
};

const api = new Api({
	url: baseUrl,
	headers: {
		authorization: myToken,
		'Content-Type': 'application/json'
	}
});

export default api;