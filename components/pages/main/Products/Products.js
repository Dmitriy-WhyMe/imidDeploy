import Container from '../../../global/Container/Container'
import TitleLine from '../../../global/TitleLine/TitleLine'
import Arrow from '../../../icons/Arrow'
import ProductsItem from './ProductsItem/ProductsItem'
import Link from 'next/link'
import { useState } from "react"

import OneImg from '../../../../images/mainPage/коллекторы 1.png'
import TwoImg from '../../../../images/mainPage/AKM.png'
import ThreeImg from '../../../../images/mainPage/ЭЛЕКТРОНАГРЕВАТЕЛИ 1.png'
import FourImg from '../../../../images/mainPage/ТЕРМОПРЕОБРАЗОВАТЕЛИ 1.png'
import FiveImg from '../../../../images/mainPage/ТЕРМОРЕГУЛЯТОРЫ 1.png'
import SixImg from '../../../../images/mainPage/РАЗЪЁМЫ 1.png'
import SevenImg from '../../../../images/mainPage/Изготовление пресс форм 1.png'
import EightImg from '../../../../images/mainPage/Колпачки нового поколения  1.png'
import NineImg from '../../../../images/mainPage/Термоустойчивые чашки 2 1.png'
import TenImg from '../../../../images/mainPage/Колпачки для растительного масла  1.png'

import styles from './Products.module.scss'

const Products = () => {
    const [contentLeft, setContentLeft] = useState([
        {id: 1,title: 'Манифолды',img: OneImg,link: '#',opacity: false,},
        {id: 2,title: 'Инжекторы',img: TwoImg,link: '#',opacity: false,},
        {id: 3,title: 'Электронагреватели',img: ThreeImg,link: '#',opacity: false,},
        {id: 4,title: 'Термопреобразователи',img: FourImg,link: '#',opacity: false,},
        {id: 5,title: 'Блоки управления',img: FiveImg,link: '#',opacity: false,},
        {id: 6,title: 'Разъемы',img: SixImg,link: '#',opacity: false,},
    ])

    const [contentRight, setContentRight] = useState([
        {id: 1,title: 'Изготовление пресс форм',img: SevenImg,link: '#',opacity: false,},
        {id: 2,title: 'Колпачки нового поколения',img: EightImg,link: '#',opacity: false,},
        {id: 3,title: 'Термоустойчивые чашки',img: NineImg,link: '#',opacity: false,},
        {id: 4,title: 'Колпачки для ростительного масла',img: TenImg,link: '#',opacity: false,},
    ])

  

  const onMouseOver = (id) => {
    const contentLeftNew = contentLeft.map(item => {
        if (item.id === id) {
            item.opacity = false
        } else {
            item.opacity = true
        }
        return item
    })
    setContentLeft(contentLeftNew)
  }

  const onMouseOut = () => {
    const contentLeftNew = contentLeft.map(item => {
        item.opacity = false
        return item
    })
    setContentLeft(contentLeftNew)
  }

  const onMouseOverRight = (id) => {
    const contentRightNew = contentRight.map(item => {
        if (item.id === id) {
            item.opacity = false
        } else {
            item.opacity = true
        }
        return item
    })
    setContentRight(contentRightNew)
  }

  const onMouseOutRight = () => {
    const contentRightNew = contentRight.map(item => {
        item.opacity = false
        return item
    })
    setContentRight(contentRightNew)
  }

  return (
    <div className={styles.products}>
        <Container>
			<TitleLine title={"продукция"} colorText="#000000" widthStatick={234}/>
            <div className={styles.flex}>

                <div className={styles.hotchannel}>
                    <Link href="#"><a className={styles.title}>Горячеканальные системы<Arrow /></a></Link>

                    {contentLeft.map((item, index) => (
                        <ProductsItem
                            key={index}
                            id={item.id}
                            title={item.title}
                            imgLink={item.img}
                            link={item.link}
                            opacity={item.opacity}
                            mouseover={onMouseOver}
                            mouseout={onMouseOut}
                        />
                    ))}
                </div>

                <div className={styles.casting}>
                    <div className={styles.castingBlock}>
                        <Link href="#"><a className={styles.title}>Литьевое производство<Arrow /></a></Link>

                        {contentRight.map((item, index) => (
                            <ProductsItem
                                key={index}
                                id={item.id}
                                title={item.title}
                                imgLink={item.img}
                                link={item.link}
                                opacity={item.opacity}
                                mouseover={onMouseOverRight}
                                mouseout={onMouseOutRight}
                            />
                        ))}
                    </div>
                    <Link href="#"><button>перейти в каталог</button></Link>
                </div>

            </div>
		</Container>
    </div>
  )
}

export default Products