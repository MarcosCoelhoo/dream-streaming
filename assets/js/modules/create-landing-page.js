export default async function initCreateLandingPage() {
  const baseUrl = "https://api.themoviedb.org/3",
    imageUrl = "https://image.tmdb.org/t/p/w780",
    apiKey = "25ea17bf3ab54060fea05921b6061c3c";

  const landingList = document.querySelector(
    ".landing-container .landing-list"
  );
  const pageRandom = +(Math.random() * 3 + 1).toFixed();

  const response = await (
    await fetch(
      `${baseUrl}/movie/popular?api_key=${apiKey}&language=pt-BR&region=BR&page=${pageRandom}`
    )
  ).json();

  const movieRandom = +(Math.random() * response.results.length + 1).toFixed(),
    numMovie = (pageRandom - 1) * 20 + movieRandom;

  const {
    vote_average: rate,
    overview: description,
    release_date: year,
    backdrop_path: backdropMovie,
    title,
  } = response.results[movieRandom];

  const itemLi = document.createElement("li");

  itemLi.classList.add("slide-container");

  itemLi.innerHTML = `
    <div class="landing-content">
            <div class="content-texts">
            <p class="landing-info">#${numMovie} Popular Movies</p>
              <h1 class="landing-title">${title}
              </h1>
              <p class="landing-description">${description}</p>
              <footer class="texts-footer">
                <p class="landing-date" data-landing="date">${year.slice(
                  0,
                  4
                )}</p>
                <div class="rate">
                  ${rate.toFixed(1)}
                  <img src="./assets/icons/star.svg" alt="icon star rate" width="13px" height="13px">
                </div>
              </footer>

            </div>
            <div class="landing-button-container">
              <a href="#" class="landing-button">
                watch now
                <img src="./assets/icons/play.svg" alt="icon play button" ">
                </a>
              </div>
            </div>
            <div class="landing-image">
                <img src="${imageUrl}${backdropMovie}" alt="image of ${title}">
            </div>
  `;

  landingList.appendChild(itemLi);
}
