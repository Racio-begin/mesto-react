import React, { useState, useEffect } from 'react';
import Card from './Card';
import api from '../utils/Api';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {

	const [userName, setUserName] = useState("");
	const [userDescription, setUserDescription] = useState("");
	const [userAvatar, setUserAvatar] = useState("");
	const [cards, setCards] = useState([]);

	useEffect(() => {
		api
			.getUserData()
			.then(
				(userInfo) => (
					setUserName(userInfo.name),
					setUserDescription(userInfo.about),
					setUserAvatar(userInfo.avatar)
				)
			)
			.catch((err) => console.log(`Ошибка ${err}`))
	}, []);

	useEffect(() => {
		api
			.getInitialCards()
			.then(
				(cards) =>
					setCards(cards)
			)
			.catch((err) => console.log(`Ошибка ${err}`))
	}, []);

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
							src={userAvatar}
							alt="Фотография пользователя"
						/>
						{/* <img class="profile__avatar" src="<%=require('./images/render_loading.gif')%>" alt="Фотография пользователя"> */}
					</button>

					<div className="profile__info">
						<h1 className="profile__username">{userName}</h1>
						<button
							onClick={onEditProfile}
							className="profile__button-edit button"
							type="button"
							aria-label="Редактировать информацию в профиле"
						/>
						<p className="profile__description">{userDescription}</p>
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
				<ul className="elements__content">
				{
            cards.map((item) => (
              <Card key={item._id} card={item} onCardClick={onCardClick} />
            ))
          }
				</ul>
			</section>
		</main>



	)
};

export default Main

