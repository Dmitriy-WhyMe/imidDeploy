import { useForm } from "react-hook-form"
import InputMask from 'react-input-mask'
import styles from './ContactsForm.module.scss'

const ContactsForm = () => {

	const { register, reset, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = data => {
		console.log(data)
		reset()
	}

	return (
		<div className={styles.form}>
			<h4>Оставьте свои контакты и мы Вам перезвоним!</h4>

			<form onSubmit={handleSubmit(onSubmit)}>
				
				<div className={styles.formItem}>
					<input 
						className={styles.formInput}
						{...register("name", {
							required: "Введите имя" 
						})}
						type="text"
						required
						placeholder=" "
					/>
					{errors.name && console.log(errors.name.message)}
					<label className={styles.formLabel}>Имя</label>
				</div>

				<div className={styles.formItem}>
					<InputMask 
						mask="+7(999)999-99-99" 
						className={styles.formInput}
						{...register("name", {
							required: "Введите телефон" 
						})}
						type="tel"
						required
						placeholder=" "
					>
					</InputMask>
					{errors.name && console.log(errors.name.message)}
					<label className={styles.formLabel}>Телефон</label>
				</div>
				
				<div className={styles.formItem}>
					<input 
						className={styles.formInput}
						{...register("email", {
							required: "Введите почту",
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
								message: "Введите корректную почту"
							}
						})}
						type="text"
						required
						placeholder=" "
					/>
					{errors.email && alert(errors.email.message)}
					<label className={styles.formLabel}>Эл. почта</label>
				</div>

				<div className={styles.formItem}>
					<textarea 
						className={styles.formTextarea}
						{...register("text", {
							required: "Введите коментарий" 
						})}
						type="text"
						required
						placeholder=" "
					/>
					{errors.text && console.log(errors.text.message)}
					<label className={styles.formLabelTextArea}>Комментарий</label>
				</div>

				<div className={styles.agreement}>
					<input type="checkbox" id="circle" required defaultChecked={true}/>
					<label htmlFor="circle">Согласен на </label>
					<a href="#">обработку персональных данных</a>
				</div>

				<button>Отправить</button>
			</form>
		</div>
	)
}

export default ContactsForm