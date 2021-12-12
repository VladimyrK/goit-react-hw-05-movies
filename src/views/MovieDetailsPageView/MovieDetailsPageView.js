import {
  Outlet,
  useParams,
  useSearchParams,
  useLocation,
} from 'react-router-dom';

import useFetchData from '../../services/customHooks/useFetchData';
import { fetchMovieById, fetchTvById } from '../../services/themoviedb-api';

import MovieCard from '../../components/MovieCard';
import AdditionalInfoMenu from '../../components/AdditionalInfoMenu';

export default function MovieDetailsPageView() {
  let { movieId } = useParams();
  let [params] = useSearchParams();
  let location = useLocation();
  let mediaType = params.get('mediaType');
  const movie = useFetchData(movieId, fetchMovieById, fetchTvById, mediaType);

  return movie ? (
    <>
      <MovieCard location={location} movie={movie} />
      <AdditionalInfoMenu movieId={movieId} location={location} />
      <Outlet />
    </>
  ) : (
    <>
      <p>No description for this movie</p>
    </>
  );
}
