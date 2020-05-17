import React from 'react';
import PropTypes from 'prop-types';
import style from './Pagination.module.scss';

const Pagination = ({ itemsPerPage, totalItems, changePage, currentPage }) => {
  const pageNumbers = [];

  // create number of pages in pagination
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <div className={style.pagination}>
      <div
        className={currentPage === 1 ? `${style.item} ${style.disabled}` : style.item}
        onClick={() => changePage(currentPage - 1)}
      >
        prev
      </div>
      {pageNumbers.map((number) => (
        <div
          key={number}
          className={currentPage === number ? `${style.item} ${style.active}` : style.item}
          onClick={() => changePage(number)}
        >
          {number}
        </div>
      ))}

      <div
        className={
          currentPage === pageNumbers.length ? `${style.item} ${style.disabled}` : style.item
        }
        onClick={() => changePage(currentPage + 1)}
      >
        next
      </div>
    </div>
  );
};

Pagination.prototype = {
  itemsPerPage: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  changePage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
