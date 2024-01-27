import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause,faCaretDown } from '@fortawesome/free-solid-svg-icons';
import styles from './PlayAllButton.module.css'

const PlayAllButton = ({ isPlayAll,handeClickAllButton}) => {
   
    return (
      <button onClick={handeClickAllButton} className={styles.button}>
        <div className={styles.item}>
        <FontAwesomeIcon    icon={isPlayAll ? faPause : faPlay} className={styles.icon} />
        </div>
        
        <div className={styles.text}>Play All </div>
        <div className={styles.vl}></div>
        <div className={styles.item}> <FontAwesomeIcon icon={faCaretDown} className={styles.iconright} /></div>
        
      </button>
    );
  };
  
  export default PlayAllButton;