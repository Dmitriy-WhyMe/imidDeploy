import { useState } from 'react'
import TitleBgDesk from '../images/mainPage/articlesPage.png'
import TitleBgMobile from '../images/mainPage/articlesPageMobile.png'
import LayoutOtherPages from "../components/global/LayoutOtherPages/LayoutOtherPages"
import AriclesItems from '../components/pages/articles/AriclesItems/AriclesItems'
import Container from '../components/global/Container/Container'

function DocumentationPage(props) {
    const [content, setContent] = useState(props)
    
    return (
        <LayoutOtherPages
            title={content.seo && content.seo.title ? content.seo.title : false}
            description={content.seo && content.seo.description ? content.seo.description : false}
            titleOtherPages="Статьи"
            imgD={TitleBgDesk}
            imgM={TitleBgMobile}
            pathTitle="Статьи"
        >
            <Container>
                <AriclesItems/>
            </Container>
        </LayoutOtherPages>
    )
}

export async function getServerSideProps({ req }) {
    const state = {
        seo: {
            title: 'Статьи',
            description: 'Статьи',
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