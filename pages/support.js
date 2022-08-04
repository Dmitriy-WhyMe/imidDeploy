import LayoutOtherPages from "../components/global/LayoutOtherPages/LayoutOtherPages"
import { useState } from 'react'
import TitleOtherPages from "../components/global/TitleOtherPages/TitleOtherPages"
import TitleBgDesk from '../images/mainPage/supportPage.png'
import TitleBgMobile from '../images/mainPage/supportPageMobile.png'
import Breadcrumbs from "../components/global/Breadcrumbs/Breadcrumbs"
import Support from "../components/pages/support/Support"
import Container from "../components/global/Container/Container"

function SupportPage(props) {
    const [content, setContent] = useState(props)
    
    return (
        <LayoutOtherPages
            title={content.seo && content.seo.title ? content.seo.title : false}
            description={content.seo && content.seo.description ? content.seo.description : false}
            titleOtherPages="Поддержка и сервис"
            imgD={TitleBgDesk}
            imgM={TitleBgMobile}
            pathTitle="Поддержка и сервис"
        >
            <Container>
                <Support />
            </Container>
        </LayoutOtherPages>
    )
}

export async function getServerSideProps({ req }) {
    const state = {
        seo: {
            title: 'Поддержка и сервис',
            description: 'Поддержка и сервис',
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

export default SupportPage