import { useParams, useSearchParams } from 'react-router-dom';

import {
  fetchMovieCreditsById,
  fetchTvCreditsById,
} from '../../services/themoviedb-api';
import useFetchData from '../../services/customHooks/useFetchData.js';

import s from './Cast.module.css';

export default function Cast() {
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
  ) : (
    <>
      <p>No description for this movie</p>
    </>
  );
}
