import React from 'react'
import PlayAllButton from './PlayAllButton'
import AddAllButton from './AddAllButton'
import SearchComponent from './SearchComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faArrowsUpDown } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.css'

function Header({setIsPlayAll, isPlayAll,handeClickAllButton, handeClickAddButton,addAllClicked}) {
  return (
    <div className={styles.header}> 
      <div className={styles.div1}>
        <PlayAllButton setIsPlayAll ={setIsPlayAll} isPlayAll={isPlayAll} handeClickAllButton ={handeClickAllButton} />
        <AddAllButton addAllClicked = {addAllClicked} handeClickAddButton = {handeClickAddButton} />
      </div>
      <div className={styles.div2}>
        <button className={styles.trbutton}> <FontAwesomeIcon icon={faArrowsUpDown} className={styles.icon} /> Track Nu... <FontAwesomeIcon icon={faCaretDown} className={styles.icon} /></button>
        <SearchComponent />
      </div>
      </div>
  )
}

export default Header

