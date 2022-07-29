import styles from './Benefits.module.scss'
import TitleLine from '../../../global/TitleLine/TitleLine'
import Container from '../../../global/Container/Container'
import BenefitsItems from './BenefitsItems/BenefitsItems'

const Benefits = () => {
	return (
		<div className={styles.benefits}>
			<Container>
				<TitleLine title={"конкурентные преимущества"} widthStatick={603}/>
			</Container>
			<BenefitsItems />
			<Container>
				<div className={styles.wrap}>
					<div className={styles.text}>
						<p>Вам не придётся долго ждать — основные комплектующие для ГКС всегда в наличии на складах в Москве и Московской области. А специалисты нашей компании всегда помогут вам найти индивидуальное решение в самых сложных вопросах благодаря накопленному за 30 лет опыту работы на рынке.</p>
						<p>Под ваши индивидуальные требования возможно проектирование и производство нестандартных комплектующих (нестандартные длины, диаметры), в том числе на замену вышедших из строя комплектующих импортного производства.</p>
					</div>
					
					<button>оставить заявку</button>
				</div>
			</Container>
		</div>
	)
}

export default Benefits