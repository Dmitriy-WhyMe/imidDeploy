import Link from 'next/link'
import Image from 'next/image'

import styles from './ProductsItem.module.scss'

const ProductsItem = ({title, imgLink, link}) => {
  return (
    <Link href={link}><a className={styles.link}>{title}<Image alt="" src={imgLink} /></a></Link>
  )
}

export default ProductsItem