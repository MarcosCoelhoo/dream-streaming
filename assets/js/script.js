import SetFetch from "./modules/set-fetch.js";
import CreateLanding from "./modules/create-landing.js";
import MenuMobile from "./modules/menu-mobile.js";
import ExpandSearch from "./modules/expand-search.js";
// import initHandleSearch from "./modules/handle-search.js";

const baseUrl = "https://api.themoviedb.org/3";
const apiKey = "25ea17bf3ab54060fea05921b6061c3c";
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

// initHandleSearch();
