import styles from "./About.module.scss"
import AboutText from './AboutText/AboutText'
import AboutSlider from './AboutSlider/AboutSlider'
import Container from '../../../global/Container/Container'
import AboutCarts from "./AboutCarts/AboutCarts"

export default function About() {
    return (
        <>
            <section className={styles.about}>

                <Container>

                    <div className={styles.aboutFirst}>
                        <AboutText />
                        <AboutSlider />
                    </div>
                    
                </Container>

            </section>
            <section className={styles.aboutCarts}>
                <AboutCarts />
            </section>
        </>
        
    )
}