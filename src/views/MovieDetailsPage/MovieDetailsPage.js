import { useParams } from 'react-router-dom';

import s from './MovieDetailsPage.module.css';

export default function MovieDetailsPage({ movies }) {
  let { movieId } = useParams();

  if (movies !== null) {
    const movie = movies.find(movie => {
      return movie.id === Number(movieId);
    });

    return (
      <div className={s.movieDetailsWrap}>
        {movie !== null ? (
          <>
            <img
              className={s.image}
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt={movie.name || movie.title}
            />
            <div>
              <h2>
                {movie.name || movie.title} (
                {movie.first_air_date
                  ? movie.first_air_date.slice(0, 4)
                  : movie.release_date.slice(0, 4)}
                )
              </h2>
            </div>
          </>
        ) : (
          <p>No description for this movie</p>
        )}
      </div>
    );
  } else return <></>;
}
