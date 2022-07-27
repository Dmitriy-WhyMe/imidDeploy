import Container from '../../../global/Container/Container'
import TitleLine from '../../../global/TitleLine/TitleLine'
import Link from 'next/link'
import styles from './Questions.module.scss'
import QuestionItem from './QuestionItem/QuestionItem'

const Questions = () => {
  return (
    <section className={styles.questions}>
        <Container>

            <div className={styles.flex}>
                <TitleLine title={"вопросы и ответы"} widthStatick={378}/>
                <Link href="#"><button>задать вопрос</button></Link>
            </div>

			<div className={styles.items}>
                <QuestionItem tabNumber="one" title="Где производится продукция компании?" text="Горячеканальная Система (ГКС), или система обогреваемых литников, представляет собой набор элементов пресс-формы, позволяющий довести материал к литьевой полости в расплавленном виде и таким образом полностью или частично избавиться от литниковой системы." />
                <QuestionItem tabNumber="two" title="Какое минимальное количество заказов можно оформить?" text="Горячеканальная Система (ГКС), или система обогреваемых литников, представляет собой набор элементов пресс-формы, позволяющий довести материал к литьевой полости в расплавленном виде и таким образом полностью или частично избавиться от литниковой системы." />
                <QuestionItem tabNumber="three" title="Можно ли оформить заказ в СНГ?" text="Горячеканальная Система (ГКС), или система обогреваемых литников, представляет собой набор элементов пресс-формы, позволяющий довести материал к литьевой полости в расплавленном виде и таким образом полностью или частично избавиться от литниковой системы." />
                <QuestionItem tabNumber="four" title="Какие сроки поставки продукции?" text="Горячеканальная Система (ГКС), или система обогреваемых литников, представляет собой набор элементов пресс-формы, позволяющий довести материал к литьевой полости в расплавленном виде и таким образом полностью или частично избавиться от литниковой системы." />
            </div>
			
		</Container>
    </section>
  )
}

export default Questions