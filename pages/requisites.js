import { useState } from 'react'
import TitleBgDesk from '../images/mainPage/requisitesPage.png'
import TitleBgMobile from '../images/mainPage/requisitesPageMobile.png'
import LayoutOtherPages from "../components/global/LayoutOtherPages/LayoutOtherPages"
import RequisitesWrapper from '../components/pages/requisites/RequisitesWrapper/RequisitesWrapper'
import Container from '../components/global/Container/Container'

function RequisitesPage(props) {
    const [content, setContent] = useState(props)
    
    return (
        <LayoutOtherPages
            title={content.seo && content.seo.title ? content.seo.title : false}
            description={content.seo && content.seo.description ? content.seo.description : false}
            titleOtherPages="Реквизиты"
            imgD={TitleBgDesk}
            imgM={TitleBgMobile}
            pathTitle="Реквизиты"
        >
            <Container>
                <RequisitesWrapper />
            </Container>
        </LayoutOtherPages>
    )
}

export async function getServerSideProps({ req }) {
    const state = {
        seo: {
            title: 'Реквизиты',
            description: 'Реквизиты',
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

export default RequisitesPage