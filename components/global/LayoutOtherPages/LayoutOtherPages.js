import styles from './LayoutOtherPages.module.scss'
import Head from 'next/head'
import {useContext} from "react"
import { PopupContext } from "../../../context/popup/popupContext"
import Header from '../HeaderWrapper/Header'
import Footer from '../Footer/Footer'
import Container from '../Container/Container'
import TitleOtherPages from '../TitleOtherPages/TitleOtherPages'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'

const LayoutOtherPages = ({title, keywords, description, children, titleOtherPages, imgD, imgM, pathTitle}) => {
    const popup = useContext(PopupContext)
    
    return (
        <>
            <Head>
                <title>{title}</title>
                {keywords ? <meta name='keywords' content={keywords} /> : null}
                {description ? <meta name='description' content={description} /> : null}
                <meta name="viewport" content="width=device-width, maximum-scale=1.0, minimum-scale=1.0" />
            </Head>
            <Header />
            <div className={styles.layout}>
                <TitleOtherPages titleOtherPages={titleOtherPages} imgD={imgD} imgM={imgM}/>
                <Breadcrumbs pathTitle={pathTitle}/>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default LayoutOtherPages