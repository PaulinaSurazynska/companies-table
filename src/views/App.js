import React from 'react';
import Pagination from 'components/Pagination/Pagination';
import Table from 'components/Table/Table';
import SearchBar from 'components/SearchBar/SearachBar';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.page}>
      <div className={style.content}>
        <h1 className={style.title}>Companies table</h1>
        <SearchBar />
        <Table />
        <Pagination />
      </div>
    </div>
  );
}

export default App;
