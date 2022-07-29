import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import {useState} from "react"
import styles from './AboutSlider.module.scss'
import Image from 'next/image'
import img from '../../../../../images/mainPage/фото.png'

const AboutSlider = () => {
    const [slider, setSlider] = useState(null)

    const swiperConfig = {
        loop: true,
        navigation: false,
        speed: 200,
        autoplay: {
            delay: 5000
        },
    }

    return (
        <>
            <div className={styles.slider}>

                <Swiper
                    {...swiperConfig}
                    onSwiper={(swiper) => setSlider(swiper)}
                >
                    <SwiperSlide>
                        <Image alt="" src={img} width={787} height={751} quality={95}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image alt="" src={img} quality={95}/>
                    </SwiperSlide>
                </Swiper>

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

export default AboutSlider