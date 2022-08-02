import Container from '../../../global/Container/Container'
import ContactsBelow from '../../main/Contacts/ContactsBelow/ContactsBelow'
import ContactsInfo from '../../main/Contacts/ContactsInfo/ContactsInfo'
import styles from './Wrapper.module.scss'

const Wrapper = () => {
  return (
    <div className={styles.wrapper}>
        <Container>
            <ContactsInfo />
            <ContactsBelow />
        </Container>
    </div>
  )
}

export default Wrapper