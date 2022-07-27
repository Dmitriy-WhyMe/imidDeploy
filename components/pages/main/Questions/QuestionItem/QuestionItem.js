import styles from './QuestionItem.module.scss'

const QuestionItem = ({title, text, tabNumber}) => {
	return (
		<div className={styles.item}>
			<input type="radio" id={tabNumber} name="accordion"/>
			<label htmlFor={tabNumber}><p>{title}</p></label>
			<p className={styles.content}>{text}</p>
		</div>
	)
}

export default QuestionItem