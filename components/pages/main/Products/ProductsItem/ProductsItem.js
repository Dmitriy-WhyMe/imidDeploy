import Link from 'next/link'
import Image from 'next/image'

import styles from './ProductsItem.module.scss'

const ProductsItem = ({title, imgLink, link}) => {
	return (
		<Link href={link}>
			<a className={styles.link}>
				<p>{title}</p>
				<div className={styles.img}><Image alt="" src={imgLink} /></div>
			</a>
		</Link>
	)
}

export default ProductsItem