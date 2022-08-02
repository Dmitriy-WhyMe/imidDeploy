import {useState} from 'react'
import Collapsible from 'react-collapsible'
import styles from './Accordion.module.scss'

const Accordion = () => {
	const [items, setItems] = useState([
		{
			id: 1,
			active: false,
			name: "Где производится продукция компании?",
			text: "Горячеканальная Система (ГКС), или система обогреваемых литников, представляет собой набор элементов пресс-формы, позволяющий довести материал к литьевой полости в расплавленном виде и таким образом полностью или частично избавиться от литниковой системы."
		},
		{
			id: 2,
			active: false,
			name: "Какое минимальное количество заказов можно оформить?",
			text: "Горячеканальная Система (ГКС), или система обогреваемых литников, представляет собой набор элементов пресс-формы, позволяющий довести материал к литьевой полости в расплавленном виде и таким образом полностью или частично избавиться от литниковой системы."
		},
		{
			id: 3,
			active: false,
			name: "Можно ли оформить заказ в СНГ?",
			text: "Горячеканальная Система (ГКС), или система обогреваемых литников, представляет собой набор элементов пресс-формы, позволяющий довести материал к литьевой полости в расплавленном виде и таким образом полностью или частично избавиться от литниковой системы."
		},
		{
			id: 4,
			active: false,
			name: "Какие сроки поставки продукции?",
			text: "Горячеканальная Система (ГКС), или система обогреваемых литников, представляет собой набор элементов пресс-формы, позволяющий довести материал к литьевой полости в расплавленном виде и таким образом полностью или частично избавиться от литниковой системы."
		},
	])

	const changeSlide = (id) => {
        const itemsCopy = items.map(item => {
            item.active = (item.id === id ? !item.active : false)
            return item
        })

        setItems(itemsCopy)
    }

	return (
		<div className={styles.accordion}>
			{items.map((item, index) => (
				<Collapsible
					key={index}
					open={item.active}
					triggerTagName="div"
					transitionTime={500}
					transitionCloseTime={500}
					easing="ease"
					accordionPosition={index + 1}
					handleTriggerClick={() => changeSlide(item.id)}
					className={styles.item}
					openedClassName={styles.item}
					triggerClassName={styles.titleWrap}
					triggerOpenedClassName={styles.titleWrap}
					contentOuterClassName={styles.textWrap}
					contentInnerClassName={styles.text}
					trigger={(
						<>
							{item.name ? (
								<div className={styles.titleItem}>{item.name}</div>
							) : null}

							<div
								className={styles.arrow}
								data-active={item.active ? "Y" : null}
							/>
						</>
					)}
				>
					<div className={styles.subContainer}>
						{item.text ? (
							<div
								className={styles.subContainerText}
								dangerouslySetInnerHTML={{__html: item.text}}
							/>
						) : null}
					</div>
				</Collapsible>
			))}
		</div>
	)
}

export default Accordion