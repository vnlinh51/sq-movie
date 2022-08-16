import React from 'react';
import { useParams } from 'react-router-dom';

import PageHeader from '../component/page-header/PageHeader';
import { category as cateApi } from '../api/tmdbApi';
import MovieGrid from '../component/movie-grid/MovieGrid';

const Catalog = () => {
  const { category } = useParams();

  return (
    <>
      <PageHeader>{category === cateApi.movie ? 'Movies' : 'TV Series'}</PageHeader>

      <div className="container">
        <div className="section mb-3">
          <MovieGrid category={category} />
        </div>
      </div>
    </>
  );
};

export default Catalog;
