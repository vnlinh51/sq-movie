import React from 'react';
import { Link } from 'react-router-dom';

import { OutlineButton } from '../component/button/Button';
import HeroSlide from '../component/hero-slide/HeroSlide';
import MovieList from '../component/movie-list/MovieList';

import { category, movieType, tvType } from '../api/tmdbApi';

const Home = () => {
  return (
    <div>
      {/* ============Hero Slide ============== */}
      <HeroSlide />

      {/* ============Movie Trending ============== */}
      <div className="section mb-3">
        <div className="section__header mb-2">
          <h2>Movies Trending</h2>
          <Link to="/movie">
            <OutlineButton className="small">View more</OutlineButton>
          </Link>
        </div>

        <MovieList category={category.movie} type={movieType.popular} />
      </div>

      {/* ============Top Rate Movies ============== */}
      <div className="section mb-3">
        <div className="section__header mb-2">
          <h2>Top Rated Movies</h2>
          <Link to="/movie">
            <OutlineButton className="small">View more</OutlineButton>
          </Link>
        </div>
        <MovieList category={category.movie} type={movieType.top_rated} />
      </div>

      {/* ============Trending TVs ============== */}
      <div className="section mb-3">
        <div className="section__header mb-2">
          <h2>Trending TV</h2>
          <Link to="/movie">
            <OutlineButton className="small">View more</OutlineButton>
          </Link>
        </div>
        <MovieList category={category.tv} type={tvType.popular} />
      </div>

      {/* ============Top Rate TVs ============== */}
      <div className="section mb-3">
        <div className="section__header mb-2">
          <h2>Top Rated TV</h2>
          <Link to="/movie">
            <OutlineButton className="small">View more</OutlineButton>
          </Link>
        </div>
        <MovieList category={category.tv} type={tvType.top_rated} />
      </div>
    </div>
  );
};

export default Home;
