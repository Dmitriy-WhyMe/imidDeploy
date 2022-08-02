import { useState } from 'react'
import TitleBgDesk from '../images/mainPage/newsPage.png'
import TitleBgMobile from '../images/mainPage/newsPageMobile.png'
import LayoutOtherPages from "../components/global/LayoutOtherPages/LayoutOtherPages"
import NewsItems from '../components/pages/news/NewsItems/NewsItems'
import Container from '../components/global/Container/Container'

function DocumentationPage(props) {
    const [content, setContent] = useState(props)
    
    return (
        <LayoutOtherPages
            title={content.seo && content.seo.title ? content.seo.title : false}
            description={content.seo && content.seo.description ? content.seo.description : false}
            titleOtherPages="Новости"
            imgD={TitleBgDesk}
            imgM={TitleBgMobile}
            pathTitle="Новости"
        >
            <Container>
                <NewsItems/>
            </Container>
        </LayoutOtherPages>
    )
}

export async function getServerSideProps({ req }) {
    const state = {
        seo: {
            title: 'Новости',
            description: 'Новости',
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