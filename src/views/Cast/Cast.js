import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import * as themoviedbAPI from '../../services/themoviedb-api';

import s from './Cast.module.css';

export default function Cast() {
  let { movieId } = useParams();
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    let disabled = false;

    async function getCredits() {
      const movieTrend = await themoviedbAPI
        .fetchTrendings()
        .then(response => response.results)
        .then(movies => movies.find(movie => movie.id === Number(movieId)));
      let credits;
      if (movieTrend.media_type === 'movie') {
        credits = await themoviedbAPI.fetchMovieCreditsById(movieId);
      }
      if (movieTrend.media_type === 'tv') {
        credits = await themoviedbAPI.fetchTvCreditsById(movieId);
      }
      setCredits(credits.cast);
    }

    if (!disabled) {
      getCredits();
    }

    return () => {
      disabled = true;
    };
  }, [movieId]);

  console.log(credits);

  return credits ? (
    <ul>
      {credits.map(credit => {
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
  // return <></>;
}
