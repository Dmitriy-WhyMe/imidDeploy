import Container from '../../../global/Container/Container'
import TitleLine from '../../../global/TitleLine/TitleLine'
import Link from 'next/link'
import styles from './Questions.module.scss'
import Accordion from './Accordion/Accordion'

const Questions = () => {
	return (
		<section className={styles.questions}>
			<Container>
				<div className={styles.flex}>
					<TitleLine title={"вопросы и ответы"} widthStatick={378}/>
					<Link href="#"><button>задать вопрос</button></Link>
				</div>
				<Accordion />
			</Container>
		</section>
	)
}

export default Questions