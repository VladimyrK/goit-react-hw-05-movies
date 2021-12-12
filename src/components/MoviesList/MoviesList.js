import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MoviesList({ movies, location }) {
  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <Link
              to={`/movies/${movie.id}?mediaType=${movie.media_type}`}
              state={{ from: location }}
            >
              {movie.name || movie.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  location: PropTypes.object,
};
