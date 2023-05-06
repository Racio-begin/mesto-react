import React from 'react';
// import logo from './logo.svg';
import '../index.css';

import logo from '../images/logo.svg'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {

	return (
		<div className="page">

			<Header logo={logo} />

			<Main
			// onEditAvatar={handleEditAvatarClick}
			// onEditProfile={handleEditProfileClick}
			// onAddPlace={handleAddPlaceClick}
			// onCardClick={handleCardClick}
			/>

			<Footer />

			{/*----     POPUP редактирования аватара    ----*/}
			<div className="popup popup_type_edit-avatar">
				<div className="popup__container popup__container_type_avatar">
					<button
						className="button popup__button-close"
						name="popupCloseButton"
						type="button"
					/>
					<h2 className="popup__title">Обновить аватар</h2>
					<form
						className="popup__form"
						name="formEditAvatar"
						id="formEditAvatar"
						noValidate=""
					>
						<input
							className="popup__input popup__input_type_avatar"
							type="url"
							name="avatar"
							id="avatar"
							placeholder="Ссылка на изображение"
							required=""
						/>
						<span className="avatar-error popup__input-error" />
						<button className="button popup__button-save" type="submit">
							Сохранить
						</button>
					</form>
				</div>
			</div>

			{/*----     POPUP редактирования профиля    ----*/}
			<div className="popup popup_type_edit-profile">
				<div className="popup__container">
					<button
						className="button popup__button-close"
						name="popupCloseButton"
						type="button"
						aria-label="Закрыть окно"
					/>
					<h2 className="popup__title">Редактировать профиль</h2>
					<form
						className="popup__form"
						name="formEditProfile"
						id="formEditProfile"
						noValidate=""
					>
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
						<button className="button popup__button-save" type="submit">
							Сохранить
						</button>
					</form>
				</div>
			</div>

			{/*----     POPUP добавления карточки    ----*/}
			<div className="popup popup_type_add-card">
				<div className="popup__container">
					<button
						className="button popup__button-close"
						name="popupCloseButton"
						type="button"
						aria-label="Закрыть окно"
					/>
					<h2 className="popup__title">Новое место</h2>
					<form
						className="popup__form"
						name="formAddCard"
						id="formAddCard"
						noValidate=""
					>
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
						<button
							className="button popup__button-save"
							type="submit"
							value="Создать"
						>
							Создать
						</button>
					</form>
				</div>
			</div>

			{/*----     POPUP открытия карточки    ----*/}
			<div className="popup popup_type_zoom-image">
				<div className="popup__container-image">
					<button
						className="button popup__button-close"
						name="popupCloseButton"
						type="button"
						aria-label="Закрыть окно"
					/>
					<img className="popup__photo" src="#" alt="" />
					<h3 className="popup__title-photo" />
				</div>
			</div>

			{/*----     POPUP подтвержения удаления карточки    ----*/}
			<div className="popup popup_type_delete-card">
				<div className="popup__container popup__container_type_delete-card">
					<button className="button popup__button-close" type="button" />
					<h2 className="popup__title">Вы уверены?</h2>
					<form
						className="popup__form"
						name="formCardDeliting"
						id="cardDeliting"
						noValidate=""
					>
						<button className="button popup__button-save" type="submit">
							Да
						</button>
					</form>
				</div>
			</div>

			{/*----     Шаблон карточки    ----*/}
			<template id="elements__template" />

		</div>

	);
}

export default App;
