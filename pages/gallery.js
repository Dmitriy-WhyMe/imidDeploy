import { useState } from 'react'
import TitleBgDesk from '../images/mainPage/galleryPage.png'
import TitleBgMobile from '../images/mainPage/galleryPageMobile.png'
import LayoutOtherPages from "../components/global/LayoutOtherPages/LayoutOtherPages"
import GalleryWrapper from '../components/pages/gallery/GalleryWrapper/GalleryWrapper'
import Container from '../components/global/Container/Container'

function GalleryPage(props) {
    const [content, setContent] = useState(props)
    
    return (
        <LayoutOtherPages
            title={content.seo && content.seo.title ? content.seo.title : false}
            description={content.seo && content.seo.description ? content.seo.description : false}
            titleOtherPages="Галерея"
            imgD={TitleBgDesk}
            imgM={TitleBgMobile}
            pathTitle="Галерея"
        >
            <Container>
                <GalleryWrapper/>
            </Container>
        </LayoutOtherPages>
    )
}

export async function getServerSideProps({ req }) {
    const state = {
        seo: {
            title: 'Галерея',
            description: 'Галерея',
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

export default GalleryPage