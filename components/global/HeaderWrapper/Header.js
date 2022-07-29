import HeaderDefault from './HeaderDefault/HeaderDefault'
import HeaderFixed from './HeaderFixed/HeaderFixed'
import {useEffect, useState} from 'react'

const Header = () => {
    const [scroll, setScroll] = useState(0)

    useEffect(() => {
        window.addEventListener("scroll", () => {
          setScroll(window.scrollY)
        })
    }, [])

    return (
        <div>
            <HeaderDefault />
            <HeaderFixed opacity={scroll > 750 ? true : false} view={scroll > 650 ? true : false}/>
        </div>
    )
}

export default Header