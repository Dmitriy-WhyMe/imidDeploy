import styles from './BenefitsItem.module.scss'

const BenefitsItem = ({ico, text, number}) => {
  return (
    <div className={styles.item}>
        <div className={styles.ico}>{ico}</div>
        <p>{text}</p>
        <div className={styles.number}>{number}</div>
    </div>
  )
}

export default BenefitsItem