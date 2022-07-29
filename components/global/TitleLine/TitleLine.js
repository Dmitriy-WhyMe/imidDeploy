import { useEffect, useRef, useState } from 'react'
import styles from './TitleLine.module.scss'

const TitleLine = ({title, colorText}) => {

	const ref = useRef(null)
	const [ width, setWidth ] = useState()
	const [ fontLoad, setFontLoad ] = useState(false)
	const breakpoint = 768
	const marginLeft = 360
	const widthScreen = typeof window !== 'undefined' ? document.documentElement.clientWidth : 0
	
	useEffect(() => {
		const widthTitle = fontLoad ? ref.current ? ref.current.offsetWidth : 0 : 0
		setWidth(widthTitle + marginLeft)

		document.fonts.ready.then(function () {
			const correctFont = widthScreen > breakpoint
				?
				document.fonts.check('normal small-caps 400 48px / 71px "Oswald", Oswald, Oswald, sans-serif')
				:
				document.fonts.check('normal small-caps 400 28px / 41px "Oswald", Oswald, Oswald, sans-serif')
			correctFont ? setFontLoad(true) : setFontLoad(false)
		})
	}, [ref.current, fontLoad])
	
	return (
		<div className={styles.title}>
			<div style={{maxWidth: width, left: -marginLeft, minWidth: width}} className={styles.line} />
			<h2 ref={ref} style={{color: colorText}}>{title}</h2>
		</div>
	)
}

export default TitleLine