import fetchMovies from "./fetch-movies.js";
import fetchSeries from "./fetch-series.js";

export default function defaultInfos() {
  const categories = ["popular", "top_rated"];
  const idSectionsMovie = ["#movie-popular", "#movie-top-rated"];
  const idSectionsSerie = ["#serie-popular", "#serie-top-rated"];

  const defaultInfoFetch = {
    baseUrl: "https://api.themoviedb.org/3",
    apiKey: "25ea17bf3ab54060fea05921b6061c3c",
    imageUrl: "https://image.tmdb.org/t/p/w780",
  };

  categories.forEach((category, index) => {
    fetchMovies(category, idSectionsMovie[index], defaultInfoFetch);
    fetchSeries(category, idSectionsSerie[index], defaultInfoFetch);
  });

  return defaultInfoFetch;
}
