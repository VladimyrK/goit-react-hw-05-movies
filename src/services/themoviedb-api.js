const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'f5066b1fda9bff158e07c9625b7402eb';

async function fetchWithErrorHandling(url) {
  const response = await fetch(url);
  return response.ok ? await response.json() : Promise.reject(null);
}

export function fetchTrendings() {
  return fetchWithErrorHandling(
    `${BASE_URL}/trending/all/day?api_key=${API_KEY}`,
  );
}

export function fetchMovieById(id) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`,
  );
}

export function fetchTvById(id) {
  return fetchWithErrorHandling(
    `${BASE_URL}/tv/${id}?api_key=${API_KEY}&language=en-US`,
  );
}

export function fetchMovieCreditsById(id) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`,
  );
}

export function fetchTvCreditsById(id) {
  return fetchWithErrorHandling(
    `${BASE_URL}/tv/${id}/credits?api_key=${API_KEY}&language=en-US`,
  );
}

export function fetchMovieGenres() {
  return fetchWithErrorHandling(
    `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`,
  );
}

export function fetchTvGenres() {
  return fetchWithErrorHandling(
    `${BASE_URL}/genre/tv/list?api_key=${API_KEY}&language=en-US`,
  );
}
