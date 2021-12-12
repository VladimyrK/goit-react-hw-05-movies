import { useParams, useSearchParams } from 'react-router-dom';

import useFetchData from '../../services/customHooks/useFetchData';
import {
  fetchMovieReviewsById,
  fetchTvReviewsById,
} from '../../services/themoviedb-api';

import Reviews from '../../components/Reviews';

export default function ReviewsView() {
  let { movieId } = useParams();
  let [params] = useSearchParams();
  let mediaType = params.get('mediaType');
  let reviews = useFetchData(
    movieId,
    fetchMovieReviewsById,
    fetchTvReviewsById,
    mediaType,
  );

  return reviews?.results?.length ? (
    <Reviews reviews={reviews} />
  ) : (
    <>
      <p>No reviews</p>
    </>
  );
}
