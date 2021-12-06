import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import PageHeading from '../../components/PageHeading';

import * as themoviedbAPI from '../../services/themoviedb-api';

export default function HomePage({ getMovies }) {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    themoviedbAPI
      .fetchTrendings()
      .then(response => response.results)
      .then(setMovies);
  }, []);

  console.log(movies);

  return (
    <>
      <PageHeading text="Trending today" />
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id} onClick={() => getMovies(movies)}>
              <Link to={`/movies/${movie.id}`}>
                {movie.name || movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
