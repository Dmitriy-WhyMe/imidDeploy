import Layout from "../components/global/Layout/Layout"
import { useState } from 'react'
import { 
    Start, SystemSelection, About, Benefits, Products, Questions, Support, News, Gallery, Contacts
} from './IndexImport'

function Page(props) {
    const [content, setContent] = useState(props)
    
    return (
        <Layout
            title={content.seo && content.seo.title ? content.seo.title : false}
            description={content.seo && content.seo.description ? content.seo.description : false}
        >
            <Start/>
            <SystemSelection />
            <About />
            <Benefits />
            <Products />
            <Questions />
            <Support />
            <News />
            <Gallery />
            <Contacts />
        </Layout>
    )
}

export async function getServerSideProps({ req }) {
    const state = {
        seo: {
            title: 'Главная',
            description: 'Главная',
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

export default Page