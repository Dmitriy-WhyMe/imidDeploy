import styles from './AboutCarts.module.scss'

const AboutCarts = () => {
  return (
    <div className={styles.carts}>

        <div className={styles.cart}>
            <div className={styles.wrap}>
                <h3>№1</h3>
                <div className={styles.line}></div>
                <p>лидер рынка горячеканальных систем</p>
            </div>
        </div>

        <div className={styles.cart}>
            <div className={styles.wrap}>
                <h3>{"> 5 000 м²"}</h3>
                <div className={styles.line}></div>
                <p>площадь производственной базы в Московской обл.</p>
            </div>
        </div>

        <div className={styles.cart}>
            <div className={styles.wrap}>
                <h3>{"> 30 лет"}</h3>
                <div className={styles.line}></div>
                <p>опыта разработки и собственного производства</p>
            </div>
        </div>

        <div className={styles.cart}>
            <div className={styles.wrap}>
                <h3>{"> 5 000"}</h3>
                <div className={styles.line}></div>
                <p>клиентов, включая АВТОВАЗ, Полимербыт, Атлант...</p>
            </div>
        </div>
        
    </div>
  )
}

export default AboutCarts