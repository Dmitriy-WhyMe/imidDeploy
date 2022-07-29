import Container from '../../../../global/Container/Container'
import ContactsForm from '../ContactsForm/ContactsForm'
import ContactsMap from '../ContactsMap/ContactsMap'
import styles from './ContactsBelow.module.scss'

const ContactsBelow = () => {
    return (
        <div className={styles.contactsBelow}>
            <div className={styles.flex}>
                <ContactsForm />
                <ContactsMap />
            </div>
        </div>
    )
}

export default ContactsBelow