import { useState } from 'react'
import TitleBgDesk from '../images/mainPage/documentationPage.png'
import TitleBgMobile from '../images/mainPage/documentationPageMobile.png'
import LayoutOtherPages from "../components/global/LayoutOtherPages/LayoutOtherPages"
import DocumentationWrapper from '../components/pages/documentation/DocumentationWrapper/DocumentationWrapper'
import Container from '../components/global/Container/Container'

function DocumentationPage(props) {
    const [content, setContent] = useState(props)
    
    return (
        <LayoutOtherPages
            title={content.seo && content.seo.title ? content.seo.title : false}
            description={content.seo && content.seo.description ? content.seo.description : false}
            titleOtherPages="Документация и материалы"
            imgD={TitleBgDesk}
            imgM={TitleBgMobile}
            pathTitle="Документация и материалы"
        >
            <Container>
                <DocumentationWrapper />
            </Container>
        </LayoutOtherPages>
    )
}

export async function getServerSideProps({ req }) {
    const state = {
        seo: {
            title: 'Документация и материалы',
            description: 'Документация и материалы',
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

export default DocumentationPage