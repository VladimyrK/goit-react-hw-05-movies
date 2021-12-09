import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import PageHeading from '../../components/PageHeading';

import { fetchTrendings } from '../../services/themoviedb-api';

export default function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchTrendings()
      .then(response => response.results)
      .then(setMovies);
  }, []);

  return (
    <>
      <PageHeading text="Trending today" />
      {movies && (
        <ul>
          {movies.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}?mediaType=${movie.media_type}`}>
                  {movie.name || movie.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
