import React from 'react';

function PopupWithForm({ name, title, isOpen, onClose, ...props }) {

	return (
		<div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
			<div className={`popup__container popup__container_type_${name}`}>

				<button
					className="button popup__button-close"
					name="popupCloseButton"
					type="button"
					aria-label="Закрыть окно"
					onClick={onClose}
				/>

				<h2 className="popup__title">{title}</h2>

				<form
					className="popup__form"
					// name={`${name}-form`}
					// id={`${name}-form`}
					name={name}
					id={name}
					noValidate="">

					{props.children}

					<button
						className="button popup__button-save"
						type="submit">
						Сохранить
					</button>

				</form>

			</div>
		</div>
	)

};

export default PopupWithForm