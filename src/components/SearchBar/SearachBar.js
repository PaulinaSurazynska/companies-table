import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './SearchBar.module.scss';

const SearchBar = () => (
  <div className={style.wrapper}>
    <span className={style.icon}>
      <FontAwesomeIcon icon={faSearch} />
    </span>
    <input type="text" placeholder="Search..." className={style.input} />
  </div>
);

export default SearchBar;
