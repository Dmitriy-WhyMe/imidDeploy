import Container from '../../../global/Container/Container'
import TitleLine from '../../../global/TitleLine/TitleLine'
import { Swiper, SwiperSlide } from "swiper/react"
import {useState} from "react"
import Image from 'next/image'
import img from '../../../../images/mainPage/DSCF4712 1.png'
// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"
import styles from './Gallery.module.scss'
import Link from 'next/link'

const Gallery = () => {
    const [activeTab, setActiveTab] = useState("photo")

    const handleTab1 = () => {
        setActiveTab("photo")
    }
    const handleTab2 = () => {
        setActiveTab("video")
    }

    const [slider, setSlider] = useState(null)
    const [slideNumber, setSlideNumber] = useState(1)

	const swiperConfig = {
		loop: true,
		navigation: false,
		speed: 200,
		slidesPerView: 1,
        spaceBetween: 25
	}

    return (
        <div className={styles.gallery}>
            <Container>
                <div className={styles.flex}>
                    <TitleLine title={"галерея"}/>
                    <Link href="#"><button className={styles.btn}>смотреть все</button></Link>
                </div>
            </Container>
            
            <div className={styles.slider}>
                <Swiper
                    {...swiperConfig}
                    onSwiper={(swiper) => setSlider(swiper)}
                    onSlideChange={(slider) => setSlideNumber(slider.realIndex + 1)}
                >
                    <SwiperSlide>
                        <div className={styles.slide}>
                            <Image alt="" src={img} quality={95}/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={styles.slide}>
                            <Image alt="" src={img} quality={95}/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={styles.slide}>
                            <Image alt="" src={img} quality={95}/>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <Container>
                <div className={styles.row}>
                    <div className={styles.tabs}>
                        <button
                            className={activeTab === "photo" ? styles.activeTab : styles.default}
                            onClick={handleTab1}
                        >Фото</button>

                        <button
                            className={activeTab === "video" ? styles.activeTab : styles.default}
                            onClick={handleTab2}
                        >Видео</button>
                    </div>

                    <div className={styles.block}>
                        <div className={styles.pagination}>
                            <div className={styles.paginationActve}>{slideNumber < 10 ? '0' : null}{slideNumber}</div>
                            <div className={styles.paginationAll}>/03</div>
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
                    </div>
                </div>
            </Container>
            
        </div>
    )
}

export default Gallery