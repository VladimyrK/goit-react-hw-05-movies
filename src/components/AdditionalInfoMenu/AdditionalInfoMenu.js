import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import s from './AdditionalInfoMenu.module.css';

export default function AdditionalInfoMenu({ movieId, location }) {
  return (
    <div className={s.additionalInfo}>
      <p>Additional Information</p>
      <ul>
        <li>
          <Link
            to={`/movies/${movieId}/cast${location.search}`}
            state={{ from: location.state?.from }}
          >
            Cast
          </Link>
        </li>
        <li>
          <Link
            to={`/movies/${movieId}/reviews${location.search}`}
            state={{ from: location.state?.from }}
          >
            Reviews
          </Link>
        </li>
      </ul>
    </div>
  );
}

AdditionalInfoMenu.propTypes = {
  movieId: PropTypes.string,
  location: PropTypes.object,
};
