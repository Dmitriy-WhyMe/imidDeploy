import Container from '../../../global/Container/Container'
import TitleLine from '../../../global/TitleLine/TitleLine'
import Arrow from '../../../icons/Arrow'
import ProductsItem from './ProductsItem/ProductsItem'
import Link from 'next/link'

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
  return (
    <div className={styles.products}>
        <Container>
			<TitleLine title={"продукция"} colorText="#000000" widthStatick={234}/>
            <div className={styles.flex}>

                <div className={styles.hotchannel}>
                    <Link href="#"><a className={styles.title}>Горячеканальные системы<Arrow /></a></Link>
                    <ProductsItem title="Манифолды" imgLink={OneImg} link="#"/>
                    <ProductsItem title="Инжекторы" imgLink={TwoImg} link="#"/>
                    <ProductsItem title="Электронагреватели" imgLink={ThreeImg} link="#"/>
                    <ProductsItem title="Термопреобразователи" imgLink={FourImg} link="#"/>
                    <ProductsItem title="Блоки управления" imgLink={FiveImg} link="#"/>
                    <ProductsItem title="Разъемы" imgLink={SixImg} link="#"/>
                </div>

                <div className={styles.casting}>
                    <div>
                        <Link href="#"><a className={styles.title}>Литьевое производство<Arrow /></a></Link>
                        <ProductsItem title="Изготовление пресс форм" imgLink={SevenImg} link="#"/>
                        <ProductsItem title="Колпачки нового поколения" imgLink={EightImg} link="#"/>
                        <ProductsItem title="Термоустойчивые чашки" imgLink={NineImg} link="#"/>
                        <ProductsItem title="Колпачки для ростительного масла" imgLink={TenImg} link="#"/>
                    </div>
                    <Link href="#"><button>перейти в каталог</button></Link>
                </div>

            </div>
		</Container>
    </div>
  )
}

export default Products