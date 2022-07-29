import Container from '../../../global/Container/Container'
import TitleLine from '../../../global/TitleLine/TitleLine'
import ContactsInfo from './ContactsInfo/ContactsInfo'
import ContactsBelow from './ContactsBelow/ContactsBelow'
import styles from './Contacts.module.scss'

const Contacts = () => {
  return (
    <section className={styles.contacts}>
        <Container>
            <TitleLine title={"Контакты"} widthStatick={198}/>
            <ContactsInfo />
            <ContactsBelow />
        </Container>
    </section>
  )
}

export default Contacts