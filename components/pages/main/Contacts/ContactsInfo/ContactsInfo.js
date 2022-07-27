import Link from 'next/link'
import MapIco from '../../../../icons/MapIco'
import styles from './ContactsInfo.module.scss'

const ContactsInfo = () => {
	return (
		<div className={styles.contactsInfo}>

			<div className={styles.itemFirst}>

				<div className={styles.left}>
					<p>генеральный директор</p>
				</div>

				<div className={styles.right}>
					<p>Кошелев Николай Андреевич</p>
				</div>

			</div>

			<div className={styles.itemFirst}>

				<div className={styles.left}>
					<p>секретарь</p>
				</div>

				<div className={styles.right}>
					<p>Кондрякова Анна</p>
					<Link href="mailto:katuar@imid.ru"><a>katuar@imid.ru</a></Link>
				</div>

			</div>

			<div className={styles.itemTwo}>

				<div className={styles.left}>
					<p>Продажа двухкомпонентного колпачка и других изделий из пластмасс</p>
				</div>

				<div className={styles.right}>
					<p>Кошелев Евгений</p>
					<Link href="tel:+79166010051"><a className={styles.number}>+7 (916) 601-00-51</a></Link>
					<Link href="mailto:probka@imid.ru"><a>probka@imid.ru</a></Link>
				</div>

			</div>

			<div className={styles.itemTwo}>

				<div className={styles.left}>
					<p>Проектирование и изготовление горячеканальных систем (ГКС) и их комплектующих</p>
				</div>

				<div className={styles.right}>
					<Link href="tel:+74957395394"><a className={styles.number}>+7 (495) 739-53-94</a></Link>
					<Link href="mailto:probka@imid.ru"><a className={styles.mail}>info@imid.ru</a></Link>
				</div>

			</div>

			<div className={styles.itemThree}>

				<div className={styles.left}>
					<p>Офис</p>
					<button>На карте<MapIco /></button>
				</div>

				<div className={styles.right}>
					<p>Москва, 127055, Вадковский пер., д. 18, стр. 1а, офис 204.</p>
				</div>

			</div>

			<div className={styles.itemThree}>

				<div className={styles.left}>
					<p>производство</p>
					<button>На карте<MapIco /></button>
				</div>

				<div className={styles.right}>
					<p>МО, Дмитровский р-н, пос. Некрасовский, ул. Ушакова, д. 27</p>
				</div>

			</div>

			

		</div>
	)
}

export default ContactsInfo