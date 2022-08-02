import Layout from "../components/global/Layout/Layout"
import { useState } from 'react'
import TitleBgDesk from '../images/mainPage/faqDesk.png'
import TitleBgMobile from '../images/mainPage/faqMobile.png'
import Accordion from "../components/pages/main/Questions/Accordion/Accordion"
import LayoutOtherPages from "../components/global/LayoutOtherPages/LayoutOtherPages"
import FaqBtn from "../components/pages/faq/FaqBtn/FaqBtn"
import Container from "../components/global/Container/Container"

function FaqPage(props) {
    const [content, setContent] = useState(props)
    
    return (
        <LayoutOtherPages
            title={content.seo && content.seo.title ? content.seo.title : false}
            description={content.seo && content.seo.description ? content.seo.description : false}
            titleOtherPages="Вопросы и ответы"
            imgD={TitleBgDesk}
            imgM={TitleBgMobile}
            pathTitle="Вопросы и ответы"
        >
            <Container>
                <Accordion />
                <FaqBtn />
            </Container>
        </LayoutOtherPages>
    )
}

export async function getServerSideProps({ req }) {
    const state = {
        seo: {
            title: 'Вопросы и ответы',
            description: 'Вопросы и ответы',
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

export default FaqPage