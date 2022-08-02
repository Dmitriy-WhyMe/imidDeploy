import Link from 'next/link'
import Container from '../Container/Container'
import styles from './Breadcrumbs.module.scss'

const Breadcrumbs = ({pathTitle}) => {
  return (
    <div className={styles.wrapper}>
        <Container>
            <div className={styles.link}>
                <Link href="/">
                    <a>ИМИД</a>
                </Link>
                <div className={styles.decorative}>/</div>
                <div className={styles.titlePage}>{pathTitle}</div>
            </div>
        </Container>
    </div>
  )
}

export default Breadcrumbs