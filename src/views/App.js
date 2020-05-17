import React, { useState, useEffect } from 'react';
import getData from 'utils/getData';
import Pagination from 'components/Pagination/Pagination';
import Table from 'components/Table/Table';
import SearchBar from 'components/SearchBar/SearachBar';
import style from './App.module.scss';

function App() {
  const [companies, setCompanies] = useState([]);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);

  useEffect(() => {
    getData('https://recruitment.hal.skygate.io/companies', setCompanies, setError);
  }, []);

  // pagination logic
  const lastIndexPerPage = itemsPerPage * currentPage;
  const firstIndexPerPage = lastIndexPerPage - itemsPerPage;
  const currentItems = companies.slice(firstIndexPerPage, lastIndexPerPage);

  const changePage = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={style.page}>
      <div className={style.content}>
        <h1 className={style.title}>Companies table</h1>
        <SearchBar />
        {error ? (
          <p>There was a problem with loading the data, please try again later</p>
        ) : (
          <Table companies={currentItems} />
        )}
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={companies.length}
          changePage={changePage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default App;
