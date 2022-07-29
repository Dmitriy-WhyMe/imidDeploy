import Link from 'next/link'
import NewsSlider from './NewsSlider/NewsSlider'
import styles from './News.module.scss'

const News = () => {
  return (
    <div className={styles.news}>
        <div className={styles.wrap}>
            <div className={styles.flex}>
                <h2>Новости и статьи</h2>
                <Link href="#"><button>смотреть больше</button></Link>
            </div>
            <NewsSlider />
        </div>
    </div>
  )
}

export default News