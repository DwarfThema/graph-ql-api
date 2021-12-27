import fetch from "node-fetch";
const API_URL = "https://yts.mx/api/v2/list_movies.json?";

export const getMovies = (limit, rating) => {
  let REQUEST_RUL = API_URL;
  if (limit > 0) {
    REQUEST_RUL += `limit=${limit}`;
  }
  if (rating > 0) {
    REQUEST_RUL += `&minimum_rating=${rating}`;
  }
  return fetch(`${REQUEST_RUL}`)
    .then((res) => res.json())
    .then((json) => json.data.movies);
};
