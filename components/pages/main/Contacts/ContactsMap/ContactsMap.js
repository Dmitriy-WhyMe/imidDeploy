import Image from 'next/image'
import img from '../../../../../images/mainPage/карта.png'
import styles from './ContactsMap.module.scss'

const ContactsMap = () => {
    return (
        <div className={styles.map}>
            <Image alt="" src={img}/>
        </div>
    )
}

export default ContactsMap