import { useParams, useSearchParams } from 'react-router-dom';

import {
  fetchMovieCreditsById,
  fetchTvCreditsById,
} from '../../services/themoviedb-api';
import useFetchData from '../../services/customHooks/useFetchData.js';

import Cast from '../../components/Cast';

export default function CastView() {
  let { movieId } = useParams();
  let [params] = useSearchParams();
  let mediaType = params.get('mediaType');

  const credits = useFetchData(
    movieId,
    fetchMovieCreditsById,
    fetchTvCreditsById,
    mediaType,
  );

  return credits?.cast?.length ? (
    <Cast credits={credits} />
  ) : (
    <>
      <p>No description for this movie</p>
    </>
  );
}
