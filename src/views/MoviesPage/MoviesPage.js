import { useSearchParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { fetchByQuery } from '../../services/themoviedb-api';

export default function MoviesPage() {
  let [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState(null);
  const [inputQuery, setInputQuery] = useState('');

  useEffect(() => {
    fetchByQuery(searchParams.get('query'))
      .then(response => response.results)
      .then(setMovies);
  }, [searchParams]);

  function handleInputQuery(e) {
    setInputQuery(e.currentTarget.value.toLowerCase());
  }

  function onSubmit(e) {
    e.preventDefault();

    let query = inputQuery;
    if (query) {
      setSearchParams({ query });
    } else {
      setSearchParams({});
    }

    setInputQuery('');
  }

  console.log(movies);

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={inputQuery}
          onChange={handleInputQuery}
        />
        <button type="submit">Search</button>
      </form>
      {movies && searchParams.get('query') && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}?mediaType=${movie.media_type}`}>
                {movie.name || movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
