import defaultInfos from "./default-infos.js";
import initBuildSection from "./build-section.js";

export default function initHandleSearch() {
  const searchInput = document.querySelector('[data-search="container"] input'),
    sectionTitle = document.querySelector(
      "#main-search-container .section-title"
    ),
    movieList = document.querySelector("#main-search-container .movie-list");

  const timer = 1000;

  const { apiKey, baseUrl } = defaultInfos();

  function handleSearch(search) {
    fetch(
      `${baseUrl}/search/movie?api_key=${apiKey}&language=en&region=BR&query=${search}&include_adult=false`
    )
      .then((r) => r.json())
      .then((json) => {
        if (movieList.children.length) {
          const arrayChildren = Array.from(movieList.children);
          sectionTitle.innerText = "Search by movies";

          arrayChildren.forEach((item) => {
            movieList.removeChild(item);
          });
        }

        json.results.forEach((item) => {
          const objMidiaInfo = {
            rate: item.vote_average,
            popularity: item.popularity,
            year: item.release_date,
            imageMidia: item.poster_path,
            idMidia: item.id,
            type: "movie",
          };

          initBuildSection("#main-search-container", objMidiaInfo);
        });
      });
  }

  function start() {
    setTimeout(() => {
      handleSearch(searchInput.value);
    }, timer);
  }

  searchInput.addEventListener("keydown", start);
}
