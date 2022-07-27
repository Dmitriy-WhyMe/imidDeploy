import Image from 'next/image'
import bgImg from '../../../../images/mainPage/обложка.png'
import flag from '../../../../images/mainPage/триколор России.png'
import Container from '../../../global/Container/Container'
import styles from './Start.module.scss'

const Start = () => {
	return (
		<section className={styles.start}>

			<div className={styles.bg}>
				<Image alt="" src={bgImg} />
			</div>

			<Container>

				<div className={styles.text}>
					
					<div className={styles.flagImg}>
						<Image alt="" src={flag} width={69} height={53} />
					</div>

					<h1>Российское высокотехнологичное производство</h1>
				</div>

			</Container>
		</section>
	)
}

export default Start