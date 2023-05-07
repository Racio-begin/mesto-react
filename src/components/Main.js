import React from 'react';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {

	return (
		<main className="content">
			<section className="profile">

				<div className="profile__content">

					<button
						onClick={onEditAvatar}
						className="button profile__button-avatar-edit" type="button">
						<img
							className="profile__avatar"
							// src="<%=require('./images/Jacques-Yves_Cousteau.jpg')%>"
							src='#'
							alt="Фотография пользователя"
						/>
						{/* <img class="profile__avatar" src="<%=require('./images/render_loading.gif')%>" alt="Фотография пользователя"> */}
					</button>

					<div className="profile__info">
						<h1 className="profile__username">Жак-Ив Кусто</h1>
						<button
							onClick={onEditProfile}
							className="profile__button-edit button"
							type="button"
							aria-label="Редактировать информацию в профиле"
						/>
						<p className="profile__description">Исследователь океана</p>
					</div>

				</div>

				<button
					onClick={onAddPlace}
					className="button profile__button-add"
					type="button"
					aria-label="Добавить фотографии"
				/>

			</section>

			<section className="elements">
				<ul className="elements__content"></ul>
			</section>
		</main>

	)
};

export default Main

