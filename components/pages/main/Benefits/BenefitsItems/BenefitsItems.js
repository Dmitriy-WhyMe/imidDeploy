import styles from './BenefitsItems.module.scss'
import BenefitsItem from '../BenefitsItem/BenefitsItem'
import { 
    OneIco, OneNumber, TwoIco, TwoNumber, ThreeIco, ThreeNumber, FourIco, FourNumber, 
    FiveIco, FiveNumber, SixIco, SixNumber, SevenIco, SevenNumber, EightIco, EightNumber,
    NineIco, NineNumber, TenIco, TenNumber
} from '../BenefitsImport'

import Container from '../../../../global/Container/Container'

const BenefitsItems = () => {
  return (
    <div className={styles.wrap}>

        <Container>
            <div className={styles.items}>
                <BenefitsItem
                    ico={<OneIco />}
                    text="Лидер российского рынка Горячеканальных систем"
                    number={<OneNumber />}
                />
                <BenefitsItem
                    ico={<TwoIco />}
                    text="Опыт проектирования и производства Горячеканальных систем более 30 лет"
                    number={<TwoNumber />}
                />
                <BenefitsItem
                    ico={<ThreeIco />}
                    text="все производственные линии находятся в России"
                    number={<ThreeNumber />}
                />
                <BenefitsItem
                    ico={<FourIco />}
                    text="оперативное реагирование, минимальные сроки поставки"
                    number={<FourNumber />}
                />
                <BenefitsItem
                    ico={<FiveIco />}
                    text="Конкурентная цена, ниже чем у зарубежных аналогов"
                    number={<FiveNumber />}
                />
                <BenefitsItem
                    ico={<SixIco />}
                    text="надёжность и Качество мирового уровня"
                    number={<SixNumber />}
                />
                <BenefitsItem
                    ico={<SevenIco />}
                    text="Работаем с небольшими заказами - от 1 шт."
                    number={<SevenNumber />}
                />
                <BenefitsItem
                    ico={<EightIco />}
                    text="Собственное инструментальное производство"
                    number={<EightNumber />}
                />
                <BenefitsItem
                    ico={<NineIco />}
                    text="Адаптативность изделий под индивидуальные запросы заказчика"
                    number={<NineNumber />}
                />
                <BenefitsItem
                    ico={<TenIco />}
                    text="Стандартные и индивидуальные проекты по ТЗ заказчика"
                    number={<TenNumber />}
                />
            </div>
        </Container>
        
    </div>
  )
}

export default BenefitsItems