import React from 'react'
import styles from './TitleLine.module.scss'

const TitleLine = ({title, colorText}) => {

	const ref = React.useRef(null)
	const [ width, setWidth ] = React.useState()
	const [ responsiveMargin, setResponsiveMargin ] = React.useState(0)
	const [ fontLoad, setFontLoad ] = React.useState(false)
	const breakpoint = 768
	const widthScreen = typeof window !== 'undefined' ? document.documentElement.clientWidth : 0
	
	if (typeof window !== 'undefined') {
		document.fonts.ready.then(function () {
			const correctFont = widthScreen > breakpoint 
				? 
					setResponsiveMargin(200) ||
					document.fonts.check('normal small-caps 400 48px / 71px "Oswald", Oswald, Oswald, sans-serif')
				: 
					setResponsiveMargin(30) ||
					document.fonts.check('normal small-caps 400 28px / 41px "Oswald", Oswald, Oswald, sans-serif')
			correctFont ? setFontLoad(true) : setFontLoad(false)
		})
	}
	
	React.useEffect(() => {
		const widthTitle = fontLoad ? ref.current ? ref.current.offsetWidth : 0 : 0
		setWidth(widthTitle + responsiveMargin)
	}, [ref.current, fontLoad, responsiveMargin])
	
	return (
		<div className={styles.title}>
			<div style={{maxWidth: width, left: -responsiveMargin}} className={styles.line}></div>
			<h2 ref={ref} style={{color: colorText}}>{title}</h2>
		</div>
	)
}

export default TitleLine