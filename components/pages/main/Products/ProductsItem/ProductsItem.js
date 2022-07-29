import Link from 'next/link'
import Image from 'next/image'

import styles from './ProductsItem.module.scss'

const ProductsItem = ({id, title, imgLink, link, opacity, mouseover, mouseout}) => {
	return (
		<Link href={link}>
			<a
				className={styles.link}
				onMouseEnter={() => mouseover(id)}
				onMouseLeave={mouseout}
				data-opacity={opacity ? "Y" : null}
			>
				<p>{title}</p>
				<div className={styles.img}><Image alt="" src={imgLink} quality={95}/></div>
			</a>
		</Link>
	)
}

export default ProductsItem