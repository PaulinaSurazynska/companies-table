import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './SearchBar.module.scss';

const SearchBar = ({ companies }) => {
  const handleInputChange = (e) => {
    const search = companies.filter((company) => {
      return Object.values(company)
        .map((value) => {
          return String(value);
        })
        .find((value) => value.toUpperCase().includes(e.target.value.toUpperCase()));
    });
    return search;
  };
  return (
    <div className={style.wrapper}>
      <span className={style.icon}>
        <FontAwesomeIcon icon={faSearch} />
      </span>
      <input
        type="text"
        placeholder="Search..."
        className={style.input}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
