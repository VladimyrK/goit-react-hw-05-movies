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
