import { useSearchParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { fetchByQuery } from '../../services/themoviedb-api';

import MoviesList from '../../components/MoviesList';
import MoviesSearchForm from '../../components/MoviesSearchForm';

export default function MoviesPageView() {
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
      <MoviesSearchForm
        onSubmit={onSubmit}
        query={query}
        handlequery={handlequery}
      />
      {movies && searchParams.get('query') && (
        <MoviesList movies={movies} location={location} />
      )}
    </>
  );
}
