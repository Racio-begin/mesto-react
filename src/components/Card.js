import React from "react";

function Card(props) {

	function handleClick() {
		props.onCardClick(props.card);
	};

	return (
		<div id="elements__template">
			<li className="element">
				<img className="element__image"
					src={props.card.link}
					alt={props.card.name}
					onClick={handleClick}
				/>
				<button
					className="button element__button-bin"
					type="button"
					aria-label="Удалить место"
				/>
				<div className="element__description">
					<h2 className="element__place">{props.card.name}</h2>
					<div className="element__likes-container">
						<button
							className="button element__button-like"
							type="button"
							aria-label="Оценить место"
						/>
						<div className="element__like-counter">{props.card.likes.length}</div>
					</div>
				</div>
			</li>
		</div>
	);

};

export default Card