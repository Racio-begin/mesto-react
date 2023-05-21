import React from 'react';

function ImagePopup({ card, onClose }) {

	return (
		<div className={`popup popup_type_zoom-image ${card ? "popup_opened" : ""}`} onClick={() => onClose(false)}>
			<div className="popup__container-image" onClick={e => e.stopPropagation()}>

				<button
					className="button popup__button-close"
					name="popupCloseButton"
					type="button"
					aria-label="Закрыть окно"
					onClick={onClose}
				/>

				<img
					className="popup__photo"
					src={card?.link}
					alt={card?.name}
				/>

				<h3
					className="popup__title-photo"
				>{card?.name}
				</h3>

			</div>
		</div>
	);

};

export default ImagePopup