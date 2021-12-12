import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Container from './components/Container';
import AppBar from './components/AppBar';

const HomePage = lazy(() => import('./views/HomePageView'));
const MoviesPage = lazy(() => import('./views/MoviesPageView'));
const MovieDetailsPage = lazy(() => import('./views/MovieDetailsPageView'));
const Cast = lazy(() => import('./views/CastView'));
const Reviews = lazy(() => import('./views/ReviewsView'));

function App() {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <Container>
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </Container>
    </Suspense>
  );
}

export default App;
