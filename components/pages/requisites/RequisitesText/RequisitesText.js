import styles from './RequisitesText.module.scss'

const RequisitesText = () => {
  return (
    <div className={styles.table}>
        <div className={styles.row}>
            <div className={styles.left}>
                <p>Материал оболочки</p>
            </div>

            <div className={styles.right}>
                <p>12Х18Н10Т</p>
            </div>
        </div>

        <div className={styles.row}>
            <div className={styles.left}>
                <p>Фирменное наименование </p>
            </div>
            
            <div className={styles.right}>
                <p>ООО «ИМИД»</p>
            </div>
        </div>

        <div className={styles.row}>
            <div className={styles.left}>
                <p>Юридический адрес (Плательщик и Грузополучатель)</p>
            </div>
            
            <div className={styles.right}>
                <p>127055, ГОРОД МОСКВА, ПЕРЕУЛОК ВАДКОВСКИЙ, ДОМ 18, СТРОЕНИЕ 1А, ЭТАЖ 2 ПОМЕЩ 1</p>
            </div>
        </div>

        <div className={styles.row}>
            <div className={styles.left}>
                <p>Почтовый адрес (Только для корреспонденции и посылок) В накладной и счет-фактуре не указывается!</p>
            </div>
            
            <div className={styles.right}>
                <p>127055, г. Москва Вадковский переулок, д. 18, стр. 1А</p>
            </div>
        </div>

        <div className={styles.row}>
            <div className={styles.left}>
                <p>Банковские реквизиты</p>
            </div>
            
            <div className={styles.right}>
                <p>Р/счет № 40702810238000018382</p>
                <p>ПАО «СБЕРБАНК РОССИИ» г. Москва</p>
                <p>К/счет № 30101810400000000225</p>
                <p>БИК 044525225</p>
            </div>
        </div>

        <div className={styles.row}>
            <div className={styles.left}>
                <p>ИНН/КПП</p>
                <p>ОГРН</p>
            </div>
            
            <div className={styles.right}>
                <p>7702668271/770701001</p>
                <p>1087746348271</p>
            </div>
        </div>

        <div className={styles.row}>
            <div className={styles.left}>
                <p>ОКПО</p>
            </div>
            
            <div className={styles.right}>
                <p>85660554</p>
            </div>
        </div>

        <div className={styles.row}>
            <div className={styles.left}>
                <p>ОКВЭД</p>
            </div>
            
            <div className={styles.right}>
                <p>25.22; 25.24; 29.21.2; 29.24; 29.56; 33.20; 51.65; 51.70; 60.24; 63.40; 74.13; 74.14; 74.20; 74.40; 74.84</p>
            </div>
        </div>

        <div className={styles.row}>
            <div className={styles.left}>
                <p>Контактные телефоны</p>
            </div>
            
            <div className={styles.right}>
                <a href="tel:+74999785022">+7 (499) 978-50-22</a>
                <a href="tel:+74957395394">+7 (495) 739-53-94</a>
            </div>
        </div>

        <div className={styles.row}>
            <div className={styles.left}>
                <p>Факс</p>
            </div>
            
            <div className={styles.right}>
                <a href="tel:+74957395394">+7 (495) 739-53-94</a>
            </div>
        </div>

        <div className={styles.row}>
            <div className={styles.left}>
                <p>Адрес электронной почты</p>
            </div>
            
            <div className={styles.right}>
                <a href="mailto:info@imid.ru">info@imid.ru</a>
            </div>
        </div>

        <div className={styles.row}>
            <div className={styles.left}>
                <p>Генеральный директор ООО «ИМИД»</p>
            </div>
            
            <div className={styles.right}>
                <p>Кошелев Николай Андреевич</p>
            </div>
        </div>
    </div>
  )
}

export default RequisitesText