import '../css/fonts.css'
import '../css/normalize.css'
import '../css/global.scss'
import { PopupState } from "../context/popup/popupState"
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <PopupState>
                <Component {...pageProps} />
            </PopupState>
        </>
    )
}

export default MyApp
