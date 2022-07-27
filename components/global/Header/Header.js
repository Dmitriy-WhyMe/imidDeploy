import styles from './Header.module.scss'
import Container from '../Container/Container'
import Link from 'next/link'
import Mail from '../../icons/Mail'
import Tel from '../../icons/Tel'
import Logo from '../../icons/Logo'
import LogoRight from '../../icons/LogoRight'
import Telega from '../../icons/socialHeader/Telega'
import Vk from '../../icons/socialHeader/Vk'
import Rutube from '../../icons/socialHeader/Rutube'
import Insta from '../../icons/socialHeader/Insta'
import React from 'react'

const Header = () => {

    const [scroll, setScroll] = React.useState(false)

    React.useEffect(() => {
        window.addEventListener("scroll", () => {
          setScroll(window.scrollY > 700)
        })
    }, [])


  return (
    <header className={styles.header} style={scroll ? {background: "#0E302A", position: "fixed"} : {background: "inherit", position: "absolute"}}>
        <div className={styles.logoRight}><LogoRight /></div>
        <Container>
            <div className={styles.logoContainer}>
                <Link href="/">
                    <a className={styles.logo}>
                        <Logo />
                        <div className={styles.logoLine}></div>
                        
                    </a>
                </Link>
            </div>
            
        </Container>
        

        <Container>
            <div className={styles.headerBottom}>

                <input type="checkbox" id="menu-bar" className={styles.mobileMenuCheck}/>
                <label htmlFor="menu-bar" className={styles.mobileMenuBtn}></label>
                <div className={styles.mobileMenu}>

                    <nav>
                        <Link href="#"><a>Вопросы и ответы</a></Link>
                        <Link href="#"><a>Галерея</a></Link>
                        <Link href="#"><a>Новости и статьи</a></Link>
                        <Link href="#"><a>Продукция</a></Link>
                        <Link href="#"><a>Литьевое производство</a></Link>
                        <Link href="#"><a>О компании</a></Link>
                        <Link href="#"><a>Контакты</a></Link>
                    </nav>

                    <div className={styles.contacts}>

                        <div className={styles.contactsTel}>
                            <Link href="tel:+79255173799"><a>+7 (925) 517-37-99</a></Link>
                        </div>

                        <div className={styles.contactsMail}>
                            <Link href="mailto:info@imid.ru"><a>info@imid.ru</a></Link>
                        </div>

                    </div>

                    <div className={styles.social}>
                        <Link href="#"><a><Telega /></a></Link>
                        <Link href="#"><a><Vk /></a></Link>
                        <Link href="#"><a><Insta /></a></Link>
                        <Link href="#"><a><Rutube /></a></Link>
                    </div>

                </div>

                <nav>
                    <Link href="#"><a>О компании</a></Link>
                    <Link href="#"><a>Литьевое производство</a></Link>
                    <Link href="#"><a>Продукция</a></Link>
                    <Link href="#"><a>Новости и статьи</a></Link>
                    <Link href="#"><a>Галерея</a></Link>
                    <Link href="#"><a>Вопросы и ответы</a></Link>
                    <Link href="#"><a>Контакты</a></Link>
                </nav>

                <div className={styles.headerBtns}>
                    <div className={styles.language}>
                        <Link href="/"><a>EN</a></Link>
                    </div>

                    <div className={styles.tel}>
                        <Link href="/"><a><Tel/></a></Link>
                    </div>

                    <div className={styles.mail}>
                        <Link href="/"><a><Mail/></a></Link>
                    </div>
                </div>

                
                
            </div>
        </Container>
    </header>
  )
}

export default Header