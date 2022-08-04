import { useState } from 'react'
import TitleBgDesk from '../images/mainPage/articlesPage.png'
import TitleBgMobile from '../images/mainPage/articlesPageMobile.png'
import LayoutOtherPages from "../components/global/LayoutOtherPages/LayoutOtherPages"
import ArticleSingle from '../components/pages/articles/ArticleSingle/ArticleSingle'
import Container from '../components/global/Container/Container'

function ArticleSinglePage(props) {
    const [content, setContent] = useState(props)
    
    return (
        <LayoutOtherPages
            title={content.seo && content.seo.title ? content.seo.title : false}
            description={content.seo && content.seo.description ? content.seo.description : false}
            titleOtherPages="Страница статьи"
            imgD={TitleBgDesk}
            imgM={TitleBgMobile}
            pathTitle="Страница статьи"
        >
            <Container>
                <ArticleSingle/>
            </Container>
        </LayoutOtherPages>
    )
}

export async function getServerSideProps({ req }) {
    const state = {
        seo: {
            title: 'Страница статьи',
            description: 'Страница статьи',
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

export default ArticleSinglePage