import React, { useState } from 'react';

import '../index.css';
import logo from '../images/logo.svg'

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

	const [isEditAvatarPopupOpen, setEditAvatarPopupOpened] = useState(false);
	const [isAddPlacePopupOpen, setAddPlacePopupOpened] = useState(false);
	const [isEditProfilePopupOpen, setEditProfileOpened] = useState(false);
	const [selectedCard, setSelectedCard] = useState(null);

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

	function handleClosePopup() {
		closeAllPopups()
	};

	return (
		<div className="page">

			<div className="page__content">
				<Header logo={logo} />

				<Main
					onEditAvatar={handleEditAvatarClick}
					onEditProfile={handleEditProfileClick}
					onAddPlace={handleAddPlaceClick}
					onCardClick={handleCardClick}
				/>

				<Footer />
			</div>

			{/* <----     POPUP редактирования аватара    ----> */}
			<PopupWithForm name="edit-avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={handleClosePopup}>
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
			<PopupWithForm name="edit-profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={handleClosePopup}>
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
			<PopupWithForm name="add-card" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={handleClosePopup}>
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
			<PopupWithForm name="delete-card" title="Вы уверены?" buttonText="Да" onClose={handleClosePopup} />

			{/* <----     POPUP открытия карточки    ----> */}
			<ImagePopup card={selectedCard} onClose={handleClosePopup}></ImagePopup>

		</div>
	);

};

export default App;
