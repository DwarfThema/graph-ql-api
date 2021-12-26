let movies = [
  { id: 1, name: "SpiderMan", score: 4 },
  {
    id: 2,
    name: "Akira",
    score: 5,
  },
  {
    id: 3,
    name: "Evangellion",
    score: 5,
  },
  {
    id: 4,
    name: "Starwars",
    score: 2,
  },
  {
    id: 5,
    name: "Zootopia",
    score: 3,
  },
  {
    id: 6,
    name: "Toystory",
    score: 4,
  },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredMovies = movies.filter((movie) => movie.id === id);
  return filteredMovies[0];
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
