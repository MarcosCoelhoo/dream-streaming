export default class CreateLandingPage {
  constructor(baseUrl, apiKey, imageUrl, section) {
    this.baseUrl = baseUrl;
    this.imageUrl = imageUrl;
    this.apiKey = apiKey;
    this.sectionLanding = document.querySelector(section);
    this.classItem = "slide-container";
  }

  async buildLanding() {
    const pageRandom = +(Math.random() * 3 + 1).toFixed();

    const midiaJson = await (
      await fetch(
        `${this.baseUrl}/movie/popular?api_key=${this.apiKey}&language=pt-BR&region=BR&page=${pageRandom}`
      )
    ).json();
    console.log(midiaJson);

    // Seleciona um filme aleatorio do objeto e
    // deixa o resultado sem casas decimais
    const movieRandom = +(
      Math.random() *
      (midiaJson.results.length - 1)
    ).toFixed();

    const numMovie = pageRandom * 20 + movieRandom;

    const {
      vote_average: rate,
      overview: description,
      release_date: year,
      backdrop_path: backdropMovie,
      title,
    } = midiaJson.results[movieRandom];

    const itemLi = document.createElement("li");

    itemLi.classList.add(this.classItem);

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
                  <img src="${
                    this.imageUrl
                  }${backdropMovie}" alt="poster of ${title}">
              </div>
    `;

    this.sectionLanding.appendChild(itemLi);
  }

  init() {
    this.buildLanding();
    return this;
  }
}
