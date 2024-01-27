import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './SearchComponent.module.css'

const SearchComponent = ({handleChange}) => {
  
  return (
    <div>
      <div style={{ position: 'relative' }}>
        <input
          type="text"
          placeholder="Filter"
          className={styles.searchinput}
        />
        <FontAwesomeIcon
          icon={faSearch}
          className={styles.icon}
        />
      </div>
    </div>
  );
};

export default SearchComponent;