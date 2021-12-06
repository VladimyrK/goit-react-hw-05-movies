import { Routes, Route } from 'react-router-dom';

import Container from './components/Container';
import AppBar from './components/AppBar';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';
import { useState } from 'react';

function App() {
  const [movies, setMovies] = useState(null);

  function getMovies(movies) {
    setMovies(movies);
  }

  return (
    <Container>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<HomePage getMovies={getMovies} />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route
            path="/movies/:movieId"
            element={<MovieDetailsPage movies={movies} />}
          />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
