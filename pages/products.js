import { useState } from 'react'
import TitleBgDesk from '../images/mainPage/newsPage.png'
import TitleBgMobile from '../images/mainPage/newsPageMobile.png'
import LayoutOtherPages from "../components/global/LayoutOtherPages/LayoutOtherPages"
import ProductsWrapper from '../components/pages/products/ProductsWrapper/ProductsWrapper'

function ProductsPage(props) {
    const [content, setContent] = useState(props)
    
    return (
        <LayoutOtherPages
            title={content.seo && content.seo.title ? content.seo.title : false}
            description={content.seo && content.seo.description ? content.seo.description : false}
            titleOtherPages="Продукция"
            imgD={TitleBgDesk}
            imgM={TitleBgMobile}
            pathTitle="Продукция"
        >
            <ProductsWrapper/>
        </LayoutOtherPages>
    )
}

export async function getServerSideProps({ req }) {
    const state = {
        seo: {
            title: 'Продукция',
            description: 'Продукция',
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

export default ProductsPage