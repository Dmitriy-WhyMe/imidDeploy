import styles from './SystemSelection.module.scss'
import Arrow from '../../../icons/Arrow'
import Image from 'next/image'
import Link from 'next/link'
import img from '../../../../images/mainPage/гкс.png'

const SystemSelection = () => {
	return (
		<Link href="#">

			<a className={styles.systemSelection}>
				<div className={styles.text}>Выбрать <span>Горячеканальную систему</span></div>
				<Arrow />
				<div className={styles.img}>
					<Image alt="" src={img}/>
				</div>
			</a>
			
		</Link>
	)
}

export default SystemSelection