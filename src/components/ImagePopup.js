import React from 'react';

function ImagePopup({ card, onClose }) {

	return (
		<div className={`popup popup_type_zoom-image ${card ? "popup_opened" : ""}`}>
			<div className="popup__container-image">
				<button
					className="button popup__button-close"
					name="popupCloseButton"
					type="button"
					aria-label="Закрыть окно"
					onClick={onClose}
				/>
				<img className="popup__photo" src={card.link} alt={card.title}/>
				<h3 className="popup__title-photo" />
			</div>
		</div>
	)
};

export default ImagePopup