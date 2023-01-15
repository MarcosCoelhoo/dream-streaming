export default function initHandleSearch() {
  const searchInput = document.querySelector('[data-search="container"] input'),
    searchLabel = document.querySelector('[data-search="container"] label'),
    searchContainer = document.querySelector("#main-search-container"),
    sectionTitle = document.querySelector(
      "#main-search-container .section-title"
    ),
    movieList = document.querySelector("#main-search-container .movie-list");
  const baseUrl = "https://api.themoviedb.org/3",
    imageUrl = "https://image.tmdb.org/t/p/w780",
    apiKey = "25ea17bf3ab54060fea05921b6061c3c";

  const timer = 3000;

  function handleSearch(search) {
    fetch(
      `${baseUrl}/search/movie?api_key=${apiKey}&language=en&query=${search}&include_adult=true`
    )
      .then((r) => r.json())
      .then((json) => {
        console.log(json);
        if (movieList.children.length) {
          const arrayChildren = Array.from(movieList.children);
          sectionTitle.innerText = "Search by movies";

          arrayChildren.forEach((item) => {
            movieList.removeChild(item);
          });
        }

        json.results.forEach((item) => {
          const {
            vote_average: rate,
            popularity,
            release_date: year,
            poster_path: imageMovie,
          } = item;

          const itemLi = document.createElement("li");

          itemLi.innerHTML = `
          <div class="top-rated-image movie-image">
          <img src="${imageUrl}${imageMovie}" alt="">
        </div>
        <div class="movie-content">
          <div class="movie-rate">
            <div class="rate">
              ${rate.toFixed(1)}
              <img src="./assets/icons/star.svg" alt="icon star rate" width="13px" height="13px">
            </div>
          </div>
        
          <div class="movie-info">
            <div class="info-year">
              ${year.slice(0, 4)}
            </div>
            <div class="info-views">
              <img src="./assets/icons/eye.svg" alt="" width="16px" height="16px">
              <p>${popularity}</p>
            </div>
          </div>
        </div>
          `;
          sectionTitle.innerText = `Results for "${search}"`;

          movieList.appendChild(itemLi);
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
