import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css'

function App() {
	return (
		<>
			<header className="header page__header">
				<img
					className="header__logo"
					src="<%=require('./images/header-logo.svg')%>"
					alt="Логотип сайта Mesto Russia"
				/>
			</header>
			<main className="content">
				<section className="profile">
					<div className="profile__content">
						<button className="button profile__button-avatar-edit" type="button">
							<img
								className="profile__avatar"
								src="<%=require('./images/Jacques-Yves_Cousteau.jpg')%>"
								alt="Фотография пользователя"
							/>
							{/* <img class="profile__avatar" src="<%=require('./images/render_loading.gif')%>" alt="Фотография пользователя"> */}
						</button>
						<div className="profile__info">
							<h1 className="profile__username">Жак-Ив Кусто</h1>
							<button
								className="profile__button-edit button"
								type="button"
								aria-label="Редактировать информацию в профиле"
							/>
							<p className="profile__description">Исследователь океана</p>
						</div>
					</div>
					<button
						className="button profile__button-add"
						type="button"
						aria-label="Добавить фотографии"
					/>
				</section>
				<section className="elements">
					<ul className="elements__content"></ul>
				</section>
			</main>
			<footer className="footer page__footer">
				<p className="footer__copyright" lang="en">
					©2023&nbsp;Mesto&nbsp;Russia
				</p>
			</footer>
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
		</>

	);
}

export default App;
