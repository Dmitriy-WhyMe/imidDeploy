import Link from 'next/link'
import styles from './FaqBtn.module.scss'

const FaqBtn = () => {
  return (
    <div className={styles.flex}>
        <Link href="#"><button>задать вопрос</button></Link>
    </div>
  )
}

export default FaqBtn