import { useEffect } from "react";
import useForm from "../hooks/useForm";

import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {

	const { values, handleChange, setValues } = useForm({});

	function handleSubmit(e) {
		// Запрещаем браузеру переходить по адресу формы
		e.preventDefault();

		// Передаём значения управляемых компонентов во внешний обработчик
		// onAddPlace( values.name, values.link );
		onAddPlace(values);
	};

	useEffect(() => {
		if (!isOpen) setValues({});
	}, [isOpen, setValues]);

	return (
		<PopupWithForm
			name="add-card"
			title="Новое место"
			buttonText="Создать"
			isOpen={isOpen}
			onClose={onClose}
			onSubmit={handleSubmit}
		>
			<input
				className="popup__input popup__input_type_title"
				type="text"
				name="title"
				id="title"
				value={values.title || ''}
				onChange={handleChange}
				required=""
				placeholder="Название"
				minLength={2}
				maxLength={30}
			/>
			<span className="title-error popup__input-error" />
			<input
				className="popup__input popup__input_type_link"
				type="url"
				name="link"
				id="link"
				value={values.link || ''}
				onChange={handleChange}
				required=""
				placeholder="Ссылка на картинку"
			/>
			<span className="link-error popup__input-error" />
		</PopupWithForm>
	);
};

export default AddPlacePopup