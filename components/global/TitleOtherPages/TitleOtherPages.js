import Container from '../Container/Container'
import Image from 'next/image'
import styles from './TitleOtherPages.module.scss'

const TitleOtherPages = ({titleOtherPages, imgD, imgM}) => {
  return (
    <div className={styles.block}>
        <div className={styles.imgDesk}>
            <Image alt="" src={imgD} quality={95} />
        </div>
      
        <div className={styles.imgMobile}>
            <Image alt="" src={imgM} quality={95} />
        </div>
        
        <Container>
            <h1 className={styles.title}>{titleOtherPages}</h1>
        </Container>
    </div>
  )
}

export default TitleOtherPages