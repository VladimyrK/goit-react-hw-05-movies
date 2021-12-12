import Proptypes from 'prop-types';

export default function Reviews({ reviews }) {
  return (
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
  );
}

Reviews.propTypes = {
  reviews: Proptypes.object,
};
