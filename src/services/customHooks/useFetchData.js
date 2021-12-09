import { useState, useEffect } from 'react';

export default function useFetchData(
  movieId,
  fetchMovieData,
  fetchTvData,
  mediaType,
) {
  const [state, setState] = useState(null);

  useEffect(() => {
    let disabled = false;

    async function getState() {
      mediaType === 'movie'
        ? setState(await fetchMovieData(movieId))
        : setState(await fetchTvData(movieId));
    }

    if (!disabled) {
      getState();
    }

    return () => {
      disabled = true;
    };
  }, [fetchMovieData, fetchTvData, mediaType, movieId]);

  return state;
}
