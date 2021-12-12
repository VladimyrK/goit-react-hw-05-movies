import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import PageHeading from '../../components/PageHeading';
import MoviesList from '../../components/MoviesList';

import { fetchTrendings } from '../../services/themoviedb-api';

export default function HomePageView() {
  const [movies, setMovies] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetchTrendings()
      .then(response => response.results)
      .then(setMovies);
  }, []);

  return (
    <>
      <PageHeading text="Trending today" />
      {movies && <MoviesList movies={movies} location={location} />}
    </>
  );
}
