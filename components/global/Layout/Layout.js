import classes from './Layout.module.scss'
import Head from 'next/head'
import {useContext} from "react"
import { PopupContext } from "../../../context/popup/popupContext"
import Header from '../../global/Header/Header'
import Footer from '../Footer/Footer'

const Layout = ({title, keywords, description, children}) => {
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
            <div className={classes.Layout}>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout