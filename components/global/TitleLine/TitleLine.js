import React from 'react'
import styles from './TitleLine.module.scss'

const TitleLine = ({title, colorText}) => {

	const ref = React.useRef(null)
	const [ width, setWidth ] = React.useState()
	const [ fontLoad, setFontLoad ] = React.useState(false)
	const breakpoint = 768
	const marginLeft = 360
	const widthScreen = typeof window !== 'undefined' ? document.documentElement.clientWidth : 0
	
	if (typeof window !== 'undefined') {
		document.fonts.ready.then(function () {
			const correctFont = widthScreen > breakpoint
				? 
					document.fonts.check('normal small-caps 400 48px / 71px "Oswald", Oswald, Oswald, sans-serif')
				: 
					document.fonts.check('normal small-caps 400 28px / 41px "Oswald", Oswald, Oswald, sans-serif')
			correctFont ? setFontLoad(true) : setFontLoad(false)
		})
	}
	
	React.useEffect(() => {
		const widthTitle = fontLoad ? ref.current ? ref.current.offsetWidth : 0 : 0
		setWidth(widthTitle + marginLeft)
	}, [ref.current, fontLoad, marginLeft])
	
	return (
		<div className={styles.title}>
			<div style={{maxWidth: width, left: -marginLeft, minWidth: width}} className={styles.line}></div>
			<h2 ref={ref} style={{color: colorText}}>{title}</h2>
		</div>
	)
}

export default TitleLine