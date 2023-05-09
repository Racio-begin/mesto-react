import React from 'react';

function ImagePopup(props) {

	return (
		<div className={`popup popup_type_zoom-image ${props.card ? "popup_opened" : ""}`} onClick={() => props.onClose(false)}>
			<div className="popup__container-image" onClick={e => e.stopPropagation()}>

				<button
					className="button popup__button-close"
					name="popupCloseButton"
					type="button"
					aria-label="Закрыть окно"
					onClick={props.onClose}
				/>

				<img
					className="popup__photo"
					src={props.card?.link}
					alt={props.card?.name}
				/>

				<h3
					className="popup__title-photo"
				>{props.card?.name}
				</h3>

			</div>
		</div>
	);

};

export default ImagePopup