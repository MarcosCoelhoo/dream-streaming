import SetFetch from "./modules/set-fetch.js";
import CreateLanding from "./modules/create-landing.js";
import MenuMobile from "./modules/menu-mobile.js";
import ExpandSearch from "./modules/expand-search.js";
import HandleSearch from "./modules/handle-search.js";

const baseUrl = "https://api.themoviedb.org/3";
const apiKey = "a872fcc401fdd16fa2dc2d79d5c27c30";
const imageUrl = "https://image.tmdb.org/t/p/w780";

const fetchMoviesPopular = new SetFetch(
  baseUrl,
  apiKey,
  imageUrl,
  "popular",
  "#movie-popular",
  "movie"
);
fetchMoviesPopular.init();

const fetchMoviesTopRated = new SetFetch(
  baseUrl,
  apiKey,
  imageUrl,
  "top_rated",
  "#movie-top-rated",
  "movie"
);
fetchMoviesTopRated.init();

const fetchTvPopular = new SetFetch(
  baseUrl,
  apiKey,
  imageUrl,
  "popular",
  "#serie-popular",
  "tv"
);
fetchTvPopular.init();

const fetchTvTopRated = new SetFetch(
  baseUrl,
  apiKey,
  imageUrl,
  "top_rated",
  "#serie-top-rated",
  "tv"
);
fetchTvTopRated.init();

const createLanding = new CreateLanding(
  baseUrl,
  apiKey,
  imageUrl,
  ".landing-container .landing-list"
);
createLanding.init();

const menuMobile = new MenuMobile(
  '[data-menu="button"]',
  '[data-menu="container"]'
);
menuMobile.init();

const expandSearch = new ExpandSearch(
  '[data-search="container"]',
  '[data-search="container"] input',
  ".landing-container",
  "#main-content-container",
  "#main-search-container"
);
expandSearch.init();

const handleSearch = new HandleSearch(
  "#main-search-container",
  '[data-search="container"] input',
  "#main-search-container .section-title",
  "#main-search-container .movie-list",
  baseUrl,
  apiKey
);
handleSearch.init();
