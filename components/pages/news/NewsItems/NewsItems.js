import Link from 'next/link'
import styles from './NewsItems.module.scss'

const NewsItems= () => {

	return (
		<>
			<div className={styles.flex}>
				<Link href="#">
					<a className={styles.links}>
						<div className={styles.slide}>
							<div className={styles.date}>5.06.2022</div>
							<h4>Приглашаем Вас посетить наши стенды на ближайших выставках:<ul><li>Rosmould</li><li>Rosplast</li></ul></h4>
							
							<div className={styles.location}>
								<p>Москва, МВЦ «КРОКУС-ЭКСПО» </p>
								<p>Павильон 2, зал 5, стенд 1E26</p>
							</div>

							<div className={styles.period}>
								<p>7-9 июня</p>
								<div className={styles.btn}>Подробнее</div>
							</div>
						</div>
					</a>
				</Link>

				<Link href="#">
					<a className={styles.links}>
						<div className={styles.slide}>
							<div className={styles.date}>5.06.2022</div>
							<h4>RosUpack</h4>

							<div className={styles.location}>
								<p>Москва, МВЦ «КРОКУС-ЭКСПО» </p>
								<p>Павильон 2, зал 5, стенд 1E26</p>
							</div>

							<div className={styles.period}>
								<p>7-9 июня</p>
								<div className={styles.btn}>Подробнее</div>
							</div>
						</div>
					</a>
				</Link>

				<Link href="#">
					<a className={styles.links}>
						<div className={styles.slide}>
							<div className={styles.date}>5.06.2022</div>
							<h4>Открыты вакансии!</h4>

							<div className={styles.text}>
								<p>В связи с расширением производства и запуском новых проектов в компании ИМИД открыты следующие вакансии: наладчик термопластавтоматов, инженер-электрик (электронщик), слесарь-инструментальщик, конструктор пресс-форм</p>
							</div>

							<div className={styles.period}>
								<div className={styles.btn}>Подробнее</div>
							</div>
						</div>
					</a>
				</Link>

				<Link href="#">
					<a className={styles.links}>
						<div className={styles.slide}>
							<div className={styles.date}>5.06.2022</div>
							<h4>Открыты вакансии!</h4>

							<div className={styles.text}>
								<p>Все заявки, заказы и запросы будут обработаны после 10.01.2022</p>
								<p>В случае возникновения экстренных вопросов во время новогодних выходных, звоните по телефону:</p>
							</div>
							
							<div className={styles.period}>
								<p>+7 (916) 174-86-02</p>
								<div className={styles.btn}>Подробнее</div>
							</div>
						</div>
					</a>
				</Link>
				
				<Link href="#">
					<a className={styles.links}>
						<div className={styles.slide}>
							<div className={styles.date}>5.06.2022</div>
							<h4>Выставка РОСМОЛД–2021 завершилась.</h4>

							<div className={styles.text}>
								<p>Делимся впечатлениями и фотографиями </p>
							</div>

							<div className={styles.period}>
								<div className={styles.btn}>Подробнее</div>
							</div>
						</div>
					</a>
				</Link>

				<Link href="#">
					<a className={styles.links}>
						<div className={styles.slide}>
							<div className={styles.date}>5.06.2022</div>
							<h4>Открыты вакансии!</h4>

							<div className={styles.text}>
								<p>Все заявки, заказы и запросы будут обработаны после 10.01.2022</p>
								<p>В случае возникновения экстренных вопросов во время новогодних выходных, звоните по телефону:</p>
							</div>
							
							<div className={styles.period}>
								<p>+7 (916) 174-86-02</p>
								<div className={styles.btn}>Подробнее</div>
							</div>
						</div>
					</a>
				</Link>
			</div>

			<button className={styles.btnMain}>показать больше</button>
		</>
		
	)
}

export default NewsItems