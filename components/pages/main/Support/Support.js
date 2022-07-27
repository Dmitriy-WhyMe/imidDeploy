import styles from './Support.module.scss'
import Link from 'next/link'
import Container from '../../../global/Container/Container'

const Support = () => {
  return (
    <div className={styles.support}>
        <Container>

            <div className={styles.flex}>
                <h2>Поддержка и сервис</h2>
                <Link href="#"><button>подробнее</button></Link>
            </div>
            
        </Container>
    </div>
  )
}

export default Support