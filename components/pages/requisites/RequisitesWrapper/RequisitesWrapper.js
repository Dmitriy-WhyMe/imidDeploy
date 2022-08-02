import DropdownList from '../../../global/DropdownList/DropdownList'
import RequisitesText from '../RequisitesText/RequisitesText'
import styles from './RequisitesWrapper.module.scss'

const RequisitesWrapper = () => {
  return (
    <div className={styles.row}>
        <DropdownList />
        <RequisitesText />
    </div>
  )
}

export default RequisitesWrapper