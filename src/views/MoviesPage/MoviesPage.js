import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { fetchByQuery } from '../../services/themoviedb-api';

export default function MoviesPage() {
  let [searchParams, setSearchParams] = useSearchParams();
  let location = useLocation();
  const [movies, setMovies] = useState(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetchByQuery(searchParams.get('query'))
      .then(response => response.results)
      .then(setMovies);
  }, [searchParams]);

  function handlequery(e) {
    setQuery(e.currentTarget.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    setSearchParams({ query });
    setQuery('');
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={query}
          onChange={handlequery}
        />
        <button type="submit">Search</button>
      </form>
      {movies && searchParams.get('query') && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link
                to={`/movies/${movie.id}?mediaType=${movie.media_type}`}
                state={{ from: location }}
              >
                {movie.name || movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
