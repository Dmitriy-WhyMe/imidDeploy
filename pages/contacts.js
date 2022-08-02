import Layout from "../components/global/Layout/Layout"
import { useState } from 'react'
import TitleOtherPages from "../components/global/TitleOtherPages/TitleOtherPages"
import TitleBgDesk from '../images/mainPage/contactsPage.png'
import TitleBgMobile from '../images/mainPage/contactsPageMobile.png'
import Breadcrumbs from "../components/global/Breadcrumbs/Breadcrumbs"
import Wrapper from "../components/pages/contacts/Wrapper/Wrapper"

function ContactsPage(props) {
    const [content, setContent] = useState(props)
    
    return (
        <Layout
            title={content.seo && content.seo.title ? content.seo.title : false}
            description={content.seo && content.seo.description ? content.seo.description : false}
        >
            <TitleOtherPages titleOtherPages="Контакты" imgD={TitleBgDesk} imgM={TitleBgMobile}/>
            <Breadcrumbs pathTitle="Контакты"/>
            <Wrapper />
        </Layout>
    )
}

export async function getServerSideProps({ req }) {
    const state = {
        seo: {
            title: 'Контакты',
            description: 'Контакты',
        },
    }

    if (!req) {
        return state
    }
    
    // ТУТ БУДЕТ ЗАПРОС К СЕРВЕРУ
    
    return {
        props: state
    }
}

export default ContactsPage