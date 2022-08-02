import Link from 'next/link'
import Image from 'next/image'
import styles from './DocumentationItem.module.scss'

const DocumentationItem = ({img, title, date}) => {
  return (
	<Link href="#">
		<div className={styles.item}>
			<div className={styles.date}>{date}</div>
			<div className={styles.img}>
				<Image alt="" src={img} quality={95}/>
			</div>

			<div className={styles.flex}>
				<h4>{title}</h4>
				<a>открыть</a>
			</div>
		</div>
	</Link>
  )
}

export default DocumentationItem