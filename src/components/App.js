import React, { useState, useEffect } from 'react';

import CurrentUserContext from '../contexts/CurrentUserContext';
import api from '../utils/Api';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from './EditProfilePopup';
import ImagePopup from './ImagePopup';
import AddPlacePopup from './AddPlacePopup';

import logo from '../images/logo.svg'
import '../index.css';

function App() {

	// Задаем переменные через хуки для отслеживания их состояния на странице
	const [isEditAvatarPopupOpen, setEditAvatarPopupOpened] = useState(false);
	const [isAddPlacePopupOpen, setAddPlacePopupOpened] = useState(false);
	const [isEditProfilePopupOpen, setEditProfileOpened] = useState(false);

	const [selectedCard, setSelectedCard] = useState(null);

	const [currentUser, setCurrentUser] = useState({});

	const [cards, setCards] = useState([]);

	useEffect(() => {
		api.getUserData()
			.then((userData) => setCurrentUser(userData))
			.catch((err) => console.log(`Получение данных пользователя, App: ${err}`))
	}, []);

	useEffect(() => {
		api.getInitialCards()
			.then((cards) => setCards(cards))
			.catch((err) => console.log(`Получение карточек, App: ${err}`))
	}, []);

	function handleEditAvatarClick() {
		setEditAvatarPopupOpened(true)
	};

	function handleAddPlaceClick() {
		setAddPlacePopupOpened(true)
	};

	function handleEditProfileClick() {
		setEditProfileOpened(true)
	};

	function handleCardClick(card) {
		setSelectedCard(card)
	};

	function handleUpdateUser(userData) {
		api.updateUserData(userData)
			.then((data) => {
				setCurrentUser(data)
			})
			.then(() => closeAllPopups())
			.catch((err) => console.log(`Обновление данных профиля, App: ${err}`))
	};

	function handleUpdateAvatar(userData) {
		api.updateUserAvatar(userData)
			.then((data) => {
				setCurrentUser(data)
			})
			.then(() => closeAllPopups())
			.catch((err) => console.log(`Обновление аватара профиля, App: ${err}`))
	};

	function closeAllPopups() {
		setEditAvatarPopupOpened(false);
		setAddPlacePopupOpened(false);
		setEditProfileOpened(false);
		setSelectedCard(null);
	};

	function handleCardLike(card) {
		// Проверяем, есть ли уже лайк на этой карточке
		const isLiked = card.likes.some(i => i._id === currentUser._id);

		// Отправляем запрос в API и получаем обновлённые данные карточки
		api.changeLikeCardStatus(card._id, !isLiked)
			.then((newCard) => {
				setCards((state) => state.map((c) => c._id === card._id ? newCard : c))
			})
			.catch((err) => console.log(`Получение данных по лайкам, App: ${err}`))
	};

	function handleCardDelete(card) {
		api.deleteCard(card._id)
			.then(() => {
				setCards((state) => state.filter((c) => c._id !== card._id));
			})
			.catch((err) => console.log(`Удалние карточки с сервера, App: ${err}`))
	};

	function handleAddPlaceSubmit(userData) {
		api.sendingCard(userData)
			.then((newCard) => setCards([newCard, ...cards]))
			.then(closeAllPopups)
			.catch((err) => console.log(`Добавление новой карточки, App: ${err}`))
	};

	return (
		<CurrentUserContext.Provider value={currentUser}>
			<div className="page">

				<div className="page__content">
					<Header logo={logo} />

					<Main
						cards={cards}
						onEditAvatar={handleEditAvatarClick}
						onEditProfile={handleEditProfileClick}
						onAddPlace={handleAddPlaceClick}
						onCardClick={handleCardClick}
						onCardLike={handleCardLike}
						onCardDelete={handleCardDelete}
					/>

					<Footer />
				</div>

				{/* <----     POPUP редактирования аватара    ----> */}
				<EditAvatarPopup
					isOpen={isEditAvatarPopupOpen}
					onClose={closeAllPopups}
					onUpdateAvatar={handleUpdateAvatar}
				/>

				{/* <----     POPUP редактирования профиля    ----> */}
				<EditProfilePopup
					isOpen={isEditProfilePopupOpen}
					onClose={closeAllPopups}
					onUpdateUser={handleUpdateUser}
				/>

				{/* <----     POPUP добавления карточки    ----> */}
				<AddPlacePopup
					isOpen={isAddPlacePopupOpen}
					onClose={closeAllPopups}
					onAddPlace={handleAddPlaceSubmit}
				/>

				{/* <----     POPUP подтвержения удаления карточки    ----> */}
				<PopupWithForm
					name="delete-card"
					title="Вы уверены?"
					buttonText="Да"
					onClose={closeAllPopups}
				/>

				{/* <----     POPUP открытия карточки    ----> */}
				<ImagePopup
					card={selectedCard}
					onClose={closeAllPopups}
				/>

			</div>
		</CurrentUserContext.Provider>
	);

};

export default App;
