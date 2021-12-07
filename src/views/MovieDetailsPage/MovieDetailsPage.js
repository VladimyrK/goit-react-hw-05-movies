import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

import s from './MovieDetailsPage.module.css';

import * as themoviedbAPI from '../../services/themoviedb-api';

export default function MovieDetailsPage() {
  let { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    let disabled = false;

    async function getMovie() {
      const movieTrend = await themoviedbAPI
        .fetchTrendings()
        .then(response => response.results)
        .then(movies => movies.find(movie => movie.id === Number(movieId)));
      let movie;
      if (movieTrend.media_type === 'movie') {
        movie = await themoviedbAPI.fetchMovieById(movieId);
      }
      if (movieTrend.media_type === 'tv') {
        movie = await themoviedbAPI.fetchTvById(movieId);
      }
      setMovie(movie);
    }

    if (!disabled) {
      getMovie();
    }

    return () => {
      disabled = true;
    };
  }, [movieId]);

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
            {movie.first_air_date
              ? movie.first_air_date.slice(0, 4)
              : movie.release_date.slice(0, 4)}
            )
          </h2>
          <p>User Score: {movie.vote_average * 10}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h4>Genres</h4>
          <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
        </div>
      </div>
      <div>
        <p>Additional Information</p>
        <ul>
          <li>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
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
