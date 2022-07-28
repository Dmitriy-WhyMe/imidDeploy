import { Swiper, SwiperSlide } from "swiper/react"
import {useState} from "react"
import Link from 'next/link'
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import styles from './NewsSlider.module.scss'

const NewsSlider = () => {
	const [slider, setSlider] = useState(null)

	const swiperConfig = {
		loop: true,
		navigation: false,
		speed: 200,
		slidesPerView: 'auto',
        spaceBetween: 25,
		autoplay: {
			delay: 5000
		},
		breakpoints: {
			320: {
			  slidesPerView: 1,
			},
			768: {
			  slidesPerView: 3,
			}
		},
	}

	return (
		<>
			<div className={styles.slider}>
                <Swiper
                    {...swiperConfig}
                    onSwiper={(swiper) => setSlider(swiper)}
                >

					<SwiperSlide className={styles.screen}>
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
                    </SwiperSlide>

					<SwiperSlide className={styles.screen}>
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
                    </SwiperSlide>
					
					<SwiperSlide className={styles.screen}>
						<Link href="#">
							<a className={styles.links}>
								<div className={styles.slide}>
									<div className={styles.date}>5.06.2022</div>
									<h4>RosUpack</h4>
									<div className={styles.text}>В связи с расширением производства и запуском новых проектов в компании ИМИД открыты следующие вакансии: наладчик термопластавтоматов, инженер-электрик (электронщик), слесарь-инструментальщик, конструктор пресс-форм</div>
									
									<div className={styles.period}>
										<div className={styles.btn}>Подробнее</div>
									</div>
								</div>
							</a>
						</Link>
                    </SwiperSlide>
					
				</Swiper>
					{/*
					<SwiperSlide>
                        <div className={styles.slide}>
							<Link href="">
								<a>
									<div>
										<div className={styles.date}>5.06.2022</div>
										<h4>RosUpack</h4>

										<div className={styles.location}>
											<p>Москва, МВЦ «КРОКУС-ЭКСПО» </p>
											<p>Павильон 2, зал 5, стенд 1E26</p>
										</div>

										<div className={styles.period}>
											<p>7-9 июня</p>
											<a>Подробнее</a>
										</div>
									</div>
								</a>
							</Link>
						</div>
                    </SwiperSlide>

					<SwiperSlide>
                        <div className={styles.slide}>
							<Link href="">
								<a>
									<div>
										<div className={styles.date}>5.06.2022</div>
										<h4>RosUpack</h4>
										<div className={styles.text}>В связи с расширением производства и запуском новых проектов в компании ИМИД открыты следующие вакансии: наладчик термопластавтоматов, инженер-электрик (электронщик), слесарь-инструментальщик, конструктор пресс-форм</div>
										
										<div className={styles.period}>
											<a>Подробнее</a>
										</div>
									</div>
								</a>
							</Link>
						</div>
                    </SwiperSlide>
					*/}
                
            </div>

			<div className={styles.btns}>

                <button
                    className={styles.ArrowLeft}
                    onClick={() => (slider ? slider.slidePrev() : null)}
                >
                    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.999512 8L0.645958 7.64645L0.292405 8L0.645958 8.35355L0.999512 8ZM1.35307 8.35355L8.35307 1.35355L7.64596 0.646447L0.645958 7.64645L1.35307 8.35355ZM8.35307 14.6464L1.35307 7.64645L0.645958 8.35355L7.64596 15.3536L8.35307 14.6464Z" fill="white"/></svg>
                </button>

                <button
                    className={styles.ArrowRight}
                    onClick={() => (slider ? slider.slideNext() : null)}
                >
                    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.99951 8L8.35307 7.64645L8.70662 8L8.35307 8.35355L7.99951 8ZM7.64596 8.35355L0.645958 1.35355L1.35307 0.646447L8.35307 7.64645L7.64596 8.35355ZM0.645958 14.6464L7.64596 7.64645L8.35307 8.35355L1.35307 15.3536L0.645958 14.6464Z" fill="white"/></svg>
                </button>
				
            </div>
            
		</>
	)
}

export default NewsSlider