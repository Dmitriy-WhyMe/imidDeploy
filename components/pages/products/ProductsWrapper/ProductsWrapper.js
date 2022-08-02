import {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import imgBefore from '../../../../images/mainPage/before.png'
import imgNext from '../../../../images/mainPage/next.png'
import Arrow from '../../../icons/Arrow'
import styles from './ProductsWrapper.module.scss'
import Container from '../../../global/Container/Container'
import ProductsPhoto from '../ProductsPhoto/ProductsPhoto'
import ProductsVideo from '../ProductsVideo/ProductsVideo'

const ProductsWrapper = () => {

    const [activeTab, setActiveTab] = useState("photo")

    const handleTab1 = () => {
        setActiveTab("photo")
    }
    const handleTab2 = () => {
        setActiveTab("video")
    }

    return (
        <>
            <div className={styles.wrapper}>
                {activeTab === "photo" ? <ProductsPhoto/> : <ProductsVideo/>}
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
                    </div>
                </Container>
                <Container>
                    <div className={styles.navigate}>
                        <div className={styles.item}>
                            <div className={styles.img}>
                                <Image alt="" src={imgBefore} quality={95}/>
                            </div>

                            <div className={styles.text}>
                                <p>Предыдущая галерея</p>
                                <Link href="#">
                                    <a><p>горячеканальные системы</p><Arrow /></a>
                                </Link>
                            </div>
                        </div>

                        <div className={styles.item}>
                            <div className={styles.img}>
                                <Image alt="" src={imgNext} quality={95}/>
                            </div>

                            <div className={styles.text}>
                                <p>Следующая галерея</p>
                                <Link href="#">
                                    <a><p>Выставки</p><Arrow /></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
        
    )
}

export default ProductsWrapper