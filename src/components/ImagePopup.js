import React from 'react';

function ImagePopup(props) {
	console.log(props);
	return (
		<div className={`popup popup_type_zoom-image ${props.card ? "popup_opened" : ""}`}>
			<div className="popup__container-image">
				
				<button
					className="button popup__button-close"
					name="popupCloseButton"
					type="button"
					aria-label="Закрыть окно"
					onClick={props.onClose}
				/>

				<img
					className="popup__photo"
					src={props.card ? props.card.link : ""}
					alt={props.card ? props.card.name : ""}
					/>

				<h3
					className="popup__title-photo"
				>{props.card ? props.card.name : ""}
				</h3>

			</div>
		</div>
	);

};

export default ImagePopup