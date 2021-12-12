import PropTypes from 'prop-types';

import s from './Cast.module.css';

export default function Cast({ credits }) {
  return (
    <ul>
      {credits.cast.map(credit => {
        return (
          <li className={s.item} key={credit.credit_id}>
            <object
              className={s.image}
              data={`https://image.tmdb.org/t/p/w185${credit.profile_path}`}
              type="image/jpg"
            >
              <img
                src={`https://dummyimage.com/185x278/000/fff&text=No+poster+for ${credit.original_name}`}
                alt={`No poster for ${credit.original_name}`}
              />
            </object>
            <p>{credit.name}</p>
            <p>Character: {credit.character}</p>
          </li>
        );
      })}
    </ul>
  );
}

Cast.propTypes = {
  credits: PropTypes.object,
};
