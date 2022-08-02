import {useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import Image from 'next/image'
import img from '../../../../images/mainPage/DSCF4712 1.png'
import photo_2 from '../../../../images/gallery/photo_2.png'
import photo_3 from '../../../../images/gallery/photo_3.png'
import photo_4 from '../../../../images/gallery/photo_4.png'
import photo_5 from '../../../../images/gallery/photo_5.png'
import photo_6 from '../../../../images/gallery/photo_6.png'
import photo_7 from '../../../../images/gallery/photo_7.png'
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"
import styles from './ProductsPhoto.module.scss'
import Container from '../../../global/Container/Container'
import { Thumbs } from "swiper";

const ProductsPhoto = () => {
    const [slider, setSlider] = useState(null)
    const [slideNumber, setSlideNumber] = useState(1)
    const [thumbsSwiper, setThumbsSwiper] = useState(null)

	const swiperConfigMain = {
		loop: true,
		navigation: false,
		speed: 200,
		slidesPerView: 1,
        spaceBetween: 25
	}

    const swiperConfigSmall = {
		loop: true,
		navigation: false,
		slidesPerView: "auto",
        spaceBetween: 0,
        breakpoints: {
			320: {
			  slidesPerView: 3,
			},
			768: {
			  slidesPerView: 8,
			}
		},
	}

    return (
        <div className={styles.slider}>
            <div className={styles.big}>
                <Swiper
                    {...swiperConfigMain}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[ Thumbs ]}
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

            <div className={styles.small}>
                <Swiper
                    className="slider-thumb"
                    {...swiperConfigSmall}
                    onSwiper={setThumbsSwiper}
                    modules={[Thumbs]}
                >
                    <SwiperSlide>
                        <div className={styles.imgSmall}><Image alt="" src={photo_2} quality={95}/></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.imgSmall}><Image alt="" src={photo_2} quality={95}/></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.imgSmall}><Image alt="" src={photo_3} quality={95}/></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.imgSmall}><Image alt="" src={photo_4} quality={95}/></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.imgSmall}><Image alt="" src={photo_5} quality={95}/></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.imgSmall}><Image alt="" src={photo_6} quality={95}/></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.imgSmall}><Image alt="" src={photo_7} quality={95}/></div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <Container>
                <div className={styles.row}>
                    <div className={styles.block}>
                        <div className={styles.pagination}>
                            <div className={styles.paginationActve}>{slideNumber < 10 ? '0' : null}{slideNumber}</div>
                            <div className={styles.paginationAll}>/08</div>
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

export default ProductsPhoto