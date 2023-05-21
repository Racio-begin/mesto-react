import { useState, useEffect, useContext } from "react";
import PopupWithForm from "./PopupWithForm";

import CurrentUserContext from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose }) {

	const currentUser = useContext(CurrentUserContext);

	const [name, setName] = useState('');
	const [description, setDescription] = useState('');

	function handleChangeName(e) {
		setName(e.target.name)
	};

	function handleChangeDescription(e) {
		setDescription(e.target.description)
	};

	useEffect(() => {
		setName(currentUser.name);
		setDescription(currentUser.about);
	}, [currentUser]);

	return (
		<PopupWithForm
			name="edit-profile"
			title="Редактировать профиль"
			isOpen={isOpen}
			onClose={onClose}
			buttonText="Сохранить"
		>
			<input
				className="popup__input popup__input_type_username"
				type="text"
				name="username"
				id="username"
				value={name}
				onChange={handleChangeName}
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
				value={description}
				onChange={handleChangeDescription}
				placeholder="Введите информацию о себе"
				minLength={2}
				maxLength={200}
				required=""
			/>
			<span className="description-error popup__input-error" />
		</PopupWithForm>
	);
};

export default EditProfilePopup;