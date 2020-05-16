import React from 'react';
import style from './Pagination.module.scss';

const Pagination = () => (
  <>
    <div className={style.pagination}>
      <div className={style.item}>prev</div>
      <div className={style.item}>1</div>
      <div className={style.item}>2</div>
      <div className={style.item}>3</div>
      <div className={style.item}>next</div>
    </div>
  </>
);

export default Pagination;
