import { Link, Outlet, useParams, useSearchParams } from 'react-router-dom';

import useFetchData from '../../services/customHooks/useFetchData';
import { fetchMovieById, fetchTvById } from '../../services/themoviedb-api';

import s from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
  let { movieId } = useParams();
  let [params] = useSearchParams();
  let mediaType = params.get('mediaType');
  const movie = useFetchData(movieId, fetchMovieById, fetchTvById, mediaType);

  return movie ? (
    <>
      <div className={s.movieDetailsWrap}>
        <img
          className={s.image}
          src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
          alt={movie.name || movie.title}
        />
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
      <div className={s.additionalInfo}>
        <p>Additional Information</p>
        <ul>
          <li>
            <Link to={`/movies/${movieId}/cast?mediaType=${mediaType}`}>
              Cast
            </Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews?mediaType=${mediaType}`}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  ) : (
    <>
      <p>No description for this movie</p>
    </>
  );
}
