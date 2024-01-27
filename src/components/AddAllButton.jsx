import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import styles from './AddAllButton.module.css'

const AddAllButton = ({handeClickAddButton, addAllClicked}) => {
    return (
      <button onClick={handeClickAddButton} className={styles.button} >
        <div className={styles.item}>
        <FontAwesomeIcon  icon={addAllClicked? faMinus: faPlus}  className={styles.icon} />
        </div>
        
        <div className={styles.text}>Add All </div>
        <div className={styles.vl}></div>
        <div className={styles.item}> <FontAwesomeIcon icon={faCaretDown} className={styles.iconright} /></div>
        
      </button>
    );
  };
  
  export default AddAllButton;