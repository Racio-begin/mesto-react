import React, { useContext } from "react";

import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {

	const currentUser = useContext(CurrentUserContext);

	const isOwn = props.card.owner._id === currentUser._id;

	const isLiked = props.card.likes.some(i => i._id === currentUser._id);
	const cardLikeButtonClassName = ( 
		`element__button-like ${isLiked && 'element__button-like_active'}` 
	);; 

	function handleClick() {
		props.onCardClick(props.card);
	};

	function handleDeleteClick() {

	};

	function handleLikeClick() {

	};

	return (
		<div id="elements__template">
			<li className="element">
				<img className="element__image"
					src={props.card.link}
					alt={props.card.name}
					onClick={handleClick}
				/>

				{isOwn && <button
					className="button element__button-bin"
					type="button"
					aria-label="Удалить место"
					onClick={handleDeleteClick}
				/>}

				<div className="element__description">
					<h2 className="element__place">{props.card.name}</h2>
					<div className="element__likes-container">
						<button
							className={cardLikeButtonClassName}
							type="button"
							aria-label="Оценить место"
							onClick={handleLikeClick}
						/>
						<div className="element__like-counter">{props.card.likes.length}</div>
					</div>
				</div>
			</li>
		</div>
	);

};

export default Card