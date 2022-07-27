import Layout from "../components/global/Layout/Layout"
import { useState } from 'react'
/*
import { 
    Start, SystemSelection, About, Benefits, Products, Questions, Support, News, Gallery, Contacts
} from './IndexImport'
*/
import Start from '../components/pages/main/Start/Start'
import SystemSelection from '../components/pages/main/SystemSelection/SystemSelection'
import About from '../components/pages/main/About/About'
import Benefits from '../components/pages/main/Benefits/Benefits'
import Products from '../components/pages/main/Products/Products'
import Questions from '../components/pages/main/Questions/Questions'
import Support from '../components/pages/main/Support/Support'
import News from '../components/pages/main/News/News'
import Gallery from '../components/pages/main/Gallery/Gallery'
import Contacts from '../components/pages/main/Contacts/Contacts'

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