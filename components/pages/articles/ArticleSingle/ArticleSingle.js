import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import styles from './ArticleSingle.module.scss'
import Image from 'next/image'
import imgDesk from '../../../../images/mainPage/articleSingleDesk.png'
import imgMobile from '../../../../images/mainPage/articleSingleMobile.png'
import img from '../../../../images/mainPage/articleSingleImg.png'
import Pdf from '../../../icons/Pdf'
import Shared from '../../../icons/Shared'
import Link from 'next/link'

const ArticleSingle = () => {
	return (
		<div className={styles.single}>
			<h4>автор статьи</h4>
			<p>Компания «ИМИД» была создана в 1989 г. как инжиниринговая компания по разработке, изготовлению и поставке горячеканальных систем. Высокий профессиональный уровень специалистов позволил в кратчайшие сроки организовать поставку на рынок конкурентной продукции мирового уровня. Нашими клиентами с 1991 года являются сотни российских компаний, работающих в секторе переработки пластмасс. Внимательность к проблемам клиентов и высокий уровень сервиса помогли сформировать постоянную клиентскую базу и завоевать высокую репутацию на рынке.</p>

			<div className={styles.flexOne}>
				<p>С 1996 г. компания «ИМИД» начинает активно развивать инструментальное производство, ориентированное на изготовление горячеканальных пресс-форм. В кратчайшие сроки осваивались современные технологии инструментального производства с применением САПР высокого уровня. Свыше 90% технологического парка составили современные станки с СNС управлением.</p>
				<p>Наша компания является единственным производителем кольцевых нагревателей в России. Первые образцы кольцевых нагревателей нашего производства были изготовлены в 1995 году. В дальнейшем мы разработали технологии и оснастку для их серийного выпуска.</p>
				<div>
					<div className={styles.imgDesk}><Image alt="" src={imgDesk} quality={95}/></div>
					<div className={styles.imgMobile}><Image alt="" src={imgMobile} quality={95}/></div>
					<div className={styles.description}>Название фото, год создания</div>
				</div>
			</div>

			<div className={styles.flexTwo}>
				<p>За прошедшие годы компании «ИМИД» удалось не только сохранить высокий профессиональный уровень специалистов, но и создать собственную школу подготовки молодых кадров. Совместно с Московским Технологическим Университетом «СТАНКИН» создан учебно-производственный центр по подготовке специалистов — операторов станков СNС, технологов-программистов, сервис-инженеров.</p>
				<p>В 2006 г. компания «ИМИД» построила новую производственную базу (около 5000 кв. м.) в п. Некрасовском Московской области (~20 км. от Москвы). В новых современных корпусах наряду с инструментальным производством и участком по производству электронагревателей разместилось и производство пластмассовых изделий (более 10 литьевых машин).</p>
				<p>Кроме вышеуказанной деятельности, компания «ИМИД» является поставщиком технологического оборудования следующих компаний:</p>
				<p className={styles.textDop}><b>TAKISAWA</b> – известный производитель токарных станков с CNC;</p>
				<p className={styles.textDop}><b>CHMER</b> – известный производитель электроэрозионных станков.</p>
				
				<div className={styles.row}>
					<div className={styles.rowItem}>
						<div className={styles.imgDesk}><Image alt="" src={img} quality={95}/></div>
						<div className={styles.description}>Название фото, год создания</div>
					</div>

					<div className={styles.rowItem}>
						<div className={styles.imgDesk}><Image alt="" src={img} quality={95}/></div>
						<div className={styles.description}>Название фото, год создания</div>
					</div>
				</div>
			</div>

			<p>За прошедшие годы компании «ИМИД» удалось не только сохранить высокий профессиональный уровень специалистов, но и создать собственную школу подготовки молодых кадров. Совместно с Московским Технологическим Университетом «СТАНКИН» создан учебно-производственный центр по подготовке специалистов — операторов станков СNС, технологов-программистов, сервис-инженеров.</p>

			<div className={styles.flexThree}>
				<div className={styles.row}>
					<div className={styles.rowItem}>
						<Swiper
							className={styles.swiper}
							slidesPerView={1}
							spaceBetween={10}
							loop={true}
							grabCursor={true}
							pagination={true}
							modules={[Pagination]}
							navigation={{
								prevEl: `.${styles.ArrowLeft}`,
								nextEl: `.${styles.ArrowRight}`,
							}}
							breakpoints={{
								320: {
									grabCursor: true,
									pagination: {
										type: 'bullets',
										clickable: true,
										allowTouchMove: true,
										el: `.${styles.Bullets}`,
									},
								},
								769: {
									grabCursor: false,
									allowTouchMove: false,
								},
							}}
						>

							<SwiperSlide className={styles.slide}>
								<div>
									<div className={styles.imgDesk}><Image alt="" src={img} quality={95}/></div>
									<div className={styles.description}>Название фото, год создания</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className={styles.slide}>
								<div>
									<div className={styles.imgDesk}><Image alt="" src={img} quality={95}/></div>
									<div className={styles.description}>Название фото, год создания</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className={styles.slide}>
								<div>
									<div className={styles.imgDesk}><Image alt="" src={img} quality={95}/></div>
									<div className={styles.description}>Название фото, год создания</div>
								</div>
							</SwiperSlide>
						</Swiper>
						<div className={`container ${styles.Nav}`}>
							<div className={styles.Wrap}>
								<div className={styles.Bullets} id="single-nav"/>
							</div>
						</div>
					</div>

					<div className={styles.text}>
						<p>За прошедшие годы компании «ИМИД» удалось не только сохранить высокий профессиональный уровень специалистов, но и создать собственную школу подготовки молодых кадров. Совместно с Московским Технологическим Университетом «СТАНКИН» создан учебно-производственный центр по подготовке специалистов — операторов станков СNС, технологов-программистов, сервис-инженеров.</p>
						<p>Кроме вышеуказанной деятельности, компания «ИМИД» является поставщиком технологического оборудования следующих компаний:</p>
						<p className={styles.textDop}><b>TAKISAWA</b> – известный производитель токарных станков с CNC;</p>
						<p className={styles.textDop}><b>CHMER</b> – известный производитель электроэрозионных станков.</p>
					</div>
				</div>
			</div>

			<div className={styles.flexFour}>
				<div className={styles.row}>
					<div className={styles.text}>
						<p>За прошедшие годы компании «ИМИД» удалось не только сохранить высокий профессиональный уровень специалистов, но и создать собственную школу подготовки молодых кадров. Совместно с Московским Технологическим Университетом «СТАНКИН» создан учебно-производственный центр по подготовке специалистов — операторов станков СNС, технологов-программистов, сервис-инженеров.</p>
						<p>Кроме вышеуказанной деятельности, компания «ИМИД» является поставщиком технологического оборудования следующих компаний:</p>
						<p className={styles.textDop}><b>TAKISAWA</b> – известный производитель токарных станков с CNC;</p>
						<p className={styles.textDop}><b>CHMER</b> – известный производитель электроэрозионных станков.</p>
					</div>

					<div className={styles.rowItem}>
						<div className={styles.imgDesk}><Image alt="" src={img} quality={95}/></div>
						<div className={styles.description}>Название фото, год создания</div>
					</div>
				</div>
			</div>

			<div className={styles.links}>
				<Link href="#"><a>Скачать статью в PDF формате<Pdf/></a></Link>
				<Link href="#"><a>Поделиться стаьёй<Shared/></a></Link>
			</div>
		</div>
	)
}

export default ArticleSingle