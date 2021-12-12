import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import s from './MovieCard.module.css';

export default function GalleryItem({ location, movie }) {
  return (
    <>
      <button type="button">
        <Link to={location.state?.from || '/'} className={s.button}>
          Back
        </Link>
      </button>
      <div className={s.movieDetailsWrap}>
        <object
          className={s.image}
          data={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
          type="image/jpg"
        >
          <img
            src={`https://dummyimage.com/357x517/000/fff&text=No+poster+for ${
              movie.name || movie.title
            }`}
            alt={`No poster for ${movie.name || movie.title}`}
          />
        </object>
        <div>
          <h2>
            {movie.name || movie.title} (
            {(movie.first_air_date && movie.first_air_date.slice(0, 4)) ||
              (movie.release_date && movie.release_date.slice(0, 4))}
            )
          </h2>
          <p>User Score: {movie.vote_average * 10}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h4>Genres</h4>
          <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
        </div>
      </div>
    </>
  );
}

GalleryItem.propTypes = {
  location: PropTypes.object,
  movie: PropTypes.object,
};
