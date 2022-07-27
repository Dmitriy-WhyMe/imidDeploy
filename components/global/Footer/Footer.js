import Link from 'next/link'
import { useForm } from "react-hook-form";
import Container from '../Container/Container';

import Logo from '../../icons/Logo'
import LogoRightBlack from '../../icons/LogoRightBlack'
import Insta from '../../icons/Insta'
import Vk from '../../icons/Vk'
import Rutube from '../../icons/Rutube'
import Telega from '../../icons/Telega'
import Search from '../../icons/Search'
import Catalog from '../../icons/Catalog'
import SearchTwo from '../../icons/SearchTwo'
import Question from '../../icons/Question'
import TelTwo from '../../icons/TelTwo'


import styles from './Footer.module.scss'

const Footer = () => {

    const { register, reset, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = data => {
		console.log(data)
		reset()
	}

    return (
        <footer className={styles.footer}>
            <div className={styles.logoRight}><LogoRightBlack /></div>
            
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
                <div className={styles.footerBottom}>
                    <div className={styles.subscription}>
                        <p>Подписывайтесь на рассылку! Будь в курсе наших новинок, событий, новостей!</p>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className={styles.formItem}>
                                <input 
                                    className={styles.formInput}
                                    {...register("name", {
                                        required: "Введите корректную почту" 
                                    })}
                                    type="text"
                                    required
                                    placeholder=" "
                                />
                                {errors.name && console.log(errors.name.message)}
                                <label className={styles.formLabel}>Эл. почта</label>
                            </div>

                            <div className={styles.agreement}>
                                <input type="checkbox" id="circleTwo" required/>
                                <label htmlFor="circleTwo">Согласен на </label>
                                <a href="#">обработку персональных данных</a>
                            </div>

                            <button>Отправить</button>

                        </form>
                    </div>

                    <div className={styles.block}>

                        <div className={styles.menu}>

                            <div className={styles.imid}>
                                <h5>ИМид</h5>

                                <nav>
                                    <Link href="/"><a>О компании</a></Link>
                                    <Link href="/"><a>Новости и статьи</a></Link>
                                    <Link href="/"><a>Медиа</a></Link>
                                    <Link href="/"><a>FAQ</a></Link>
                                    <Link href="/"><a>Контакты</a></Link>
                                    <Link href="/"><a>Поддержка и сервис</a></Link>
                                </nav>
                            </div>

                            <div className={styles.production}>
                                <h5>производство</h5>

                                <nav>
                                    <Link href="/"><a>Каталог</a></Link>
                                    <Link href="/"><a>Инструментальное производство</a></Link>
                                    <Link href="/"><a>документация и материалы</a></Link>
                                </nav>
                            </div>

                        </div>
                        
                        <div className={styles.contacts}>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className={styles.formItem}>
                                    <input 
                                        className={styles.formInput}
                                        {...register("name", {
                                            required: "Введите запрос" 
                                        })}
                                        type="text"
                                        required
                                        placeholder=" "
                                    />
                                    {errors.name && console.log(errors.name.message)}
                                    <label className={styles.formLabel}><Search />Поиск</label>
                                </div>

                                <div className={styles.social}>

                                    <div className={styles.left}>
                                        <Link href="tel:+79255173799"><a>+7 (925) 517-37-99</a></Link>
                                        <Link href="mailto:info@imid.ru"><a>info@imid.ru</a></Link>
                                    </div>

                                    <div className={styles.right}>
                                        <Link href="/"><a><Telega /></a></Link>
                                        <Link href="/"><a><Vk /></a></Link>
                                        <Link href="/"><a><Rutube /></a></Link>
                                        <Link href="/"><a><Insta /></a></Link>
                                    </div>
                                    
                                </div>

                                <button>Оставить заявку</button>

                            </form>
                        </div>

                    </div>

                    <div className={styles.mobile}>
                        <Link href="#">
                            <a>
                                <Catalog />
                                <p>каталог</p> 
                            </a>
                        </Link>
                        <Link href="#">
                            <a>
                                <SearchTwo />
                                <p>поиск</p> 
                            </a>
                        </Link>
                        <Link href="#">
                            <a>
                                <Question />
                                <p>вопрос</p> 
                            </a>
                        </Link>
                        <Link href="#">
                            <a>
                                <TelTwo />
                                <p>звонок</p> 
                            </a>
                        </Link>
                    </div>
                </div>                        
            </Container>
        </footer>
    )
}

export default Footer