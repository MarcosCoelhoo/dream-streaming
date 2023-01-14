import carouselMovies from "./carousel-movie.js";

export default async function initCreateTopRatedList() {
  const baseUrl = "https://api.themoviedb.org/3",
    imageUrl = "https://image.tmdb.org/t/p/w780",
    apiKey = "25ea17bf3ab54060fea05921b6061c3c";

  const popularMovieList = document.querySelector("#top-rated .movie-list");

  let numPages = 2;

  for (let page = 1; page <= numPages; page++) {
    const response = await (
      await fetch(
        `${baseUrl}/movie/top_rated?api_key=${apiKey}&page=${page}&language=en`
      )
    ).json();

    response.results.forEach((item) => {
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

      popularMovieList.appendChild(itemLi);
    });
    console.log(popularMovieList.length);
  }
  carouselMovies("#top-rated");
}
