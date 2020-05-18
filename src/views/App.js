import React, { useState, useEffect } from 'react';
import { getCompanies } from 'utils/getData';
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
    getCompanies('https://recruitment.hal.skygate.io/companies', setCompanies, setError);
  }, []);

  // pagination logic
  const lastIndexPerPage = itemsPerPage * currentPage;
  const firstIndexPerPage = lastIndexPerPage - itemsPerPage;
  const currentItems = companies.slice(firstIndexPerPage, lastIndexPerPage);

  const changePage = (pageNumber) => setCurrentPage(pageNumber);

  const searchCompany = (e) => {
    const search = companies.filter((company) => {
      return Object.values(company)
        .map((value) => {
          return String(value);
        })
        .find((value) => value.toUpperCase().includes(e.target.value.toUpperCase()));
    });

    // upadate table
    setCompanies(search);
  };

  return (
    <div className={style.page}>
      <div className={style.content}>
        <h1 className={style.title}>Companies table</h1>
        <SearchBar searchCompany={searchCompany} />
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
