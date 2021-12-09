import { useParams, useSearchParams } from 'react-router-dom';

import useFetchData from '../../services/customHooks/useFetchData';
import {
  fetchMovieReviewsById,
  fetchTvReviewsById,
} from '../../services/themoviedb-api';

export default function Reviews() {
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
    <ul>
      {reviews.results.map(review => (
        <li key={review.id}>
          <h4>Author: {review.author}</h4>
          <p>
            {`  ${
              review.created_at.slice(0, 10) +
              ' ' +
              review.created_at.slice(11, 19)
            }
            (apdated:
            ${
              review.updated_at.slice(0, 10) +
              ' ' +
              review.updated_at.slice(11, 19)
            })`}
          </p>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <>
      <p>No reviews</p>
    </>
  );
}
