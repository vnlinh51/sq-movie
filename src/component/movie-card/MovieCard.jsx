import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../button/Button';
import { category } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import './movie-card.scss';

const MovieCard = (props) => {
  const item = props.item;
  const link = '/' + category[props.category] + '/' + item.id;
  const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

  const vote = item.vote_average;

  return (
    <Link to={link}>
      <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
        <Button>
          <i className="bx bx-play"></i>
        </Button>
        <div className="imdb__icon">
          <h3>{vote.toFixed(1)}</h3>
          <i className="bx bxs-star"></i>
        </div>
      </div>
      <h3>{item.title || item.name}</h3>
    </Link>
  );
};

export default MovieCard;
