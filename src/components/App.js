import React, { useState, useEffect } from 'react';

import CurrentUserContext from '../contexts/CurrentUserContext';
import api from '../utils/Api';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

import logo from '../images/logo.svg'
import '../index.css';

function App() {

	// Задаем переменные через хуки для отслеживания их состояния на странице
	const [isEditAvatarPopupOpen, setEditAvatarPopupOpened] = useState(false);
	const [isAddPlacePopupOpen, setAddPlacePopupOpened] = useState(false);
	const [isEditProfilePopupOpen, setEditProfileOpened] = useState(false);

	const [selectedCard, setSelectedCard] = useState(null);

	const [currentUser, setCurrentUser] = useState({});

	useEffect(() => {
		api.getUserData()
			.then((userData) => setCurrentUser(userData))
			.catch((err) => console.log(`Получение данных пользователя, App: ${err}`))
	});

	const [cards, setCards] = useState([]);

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

	function closeAllPopups() {
		setEditAvatarPopupOpened(false);
		setAddPlacePopupOpened(false);
		setEditProfileOpened(false);
		setSelectedCard(null);
	};

	function handleCardLike(card) {
		// Снова проверяем, есть ли уже лайк на этой карточке
		const isLiked = card.likes.some(i => i._id === currentUser._id);

		// Отправляем запрос в API и получаем обновлённые данные карточки
		api.changeLikeCardStatus(card._id, !isLiked)
			.then((newCard) => {
				setCards((state) => state.map((c) => c._id === card._id ? newCard : c))
			})
			.catch((err) => console.log(`Получение данных по лайкам, App: ${err}`))
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
					// onCardDelete={handleCardDelete}
					/>

					<Footer />
				</div>

				{/* <----     POPUP редактирования аватара    ----> */}
				<PopupWithForm name="edit-avatar" title="Обновить аватар" buttonText="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
					<input
						className="popup__input popup__input_type_avatar"
						type="url"
						name="avatar"
						id="avatar"
						placeholder="Ссылка на изображение"
						required=""
					/>
					<span className="avatar-error popup__input-error" />
				</PopupWithForm>

				{/* <----     POPUP редактирования профиля    ----> */}
				<PopupWithForm name="edit-profile" title="Редактировать профиль" buttonText="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
					<input
						className="popup__input popup__input_type_username"
						type="text"
						name="username"
						id="username"
						placeholder="Введите ваше имя"
						minLength={2}
						maxLength={40}
						required=""
					/>
					<span className="username-error popup__input-error" />
					<input
						className="popup__input popup__input_type_description"
						type="text"
						name="description"
						id="description"
						placeholder="Введите информацию о себе"
						minLength={2}
						maxLength={200}
						required=""
					/>
					<span className="description-error popup__input-error" />
				</PopupWithForm>

				{/* <----     POPUP добавления карточки    ----> */}
				<PopupWithForm name="add-card" title="Новое место" buttonText="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
					<input
						className="popup__input popup__input_type_title"
						type="text"
						name="title"
						id="title"
						required=""
						placeholder="Название"
						minLength={2}
						maxLength={30}
					/>
					<span className="title-error popup__input-error" />
					<input
						className="popup__input popup__input_type_link"
						type="url"
						name="link"
						id="link"
						required=""
						placeholder="Ссылка на картинку"
					/>
					<span className="link-error popup__input-error" />
				</PopupWithForm>

				{/* <----     POPUP подтвержения удаления карточки    ----> */}
				<PopupWithForm name="delete-card" title="Вы уверены?" buttonText="Да" onClose={closeAllPopups} />

				{/* <----     POPUP открытия карточки    ----> */}
				<ImagePopup card={selectedCard} onClose={closeAllPopups}></ImagePopup>

			</div>
		</CurrentUserContext.Provider>
	);

};

export default App;
