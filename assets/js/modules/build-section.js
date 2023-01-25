import carouselContent from "./carousel-content.js";
import returnMovie from "./return-movie.js";

export default function initBuildSection(idSection, objMidiaInfo) {
  function buildSection() {
    const sectionParent = document.querySelector(`${idSection} .movie-list`);

    const { rate, popularity, year, image, id, type, title, backdrop } =
      objMidiaInfo;

    const padraoRegexp = /[\s\W]+/g;
    const titleFormated = title.replace(padraoRegexp, "-").toLowerCase();

    if (image) {
      const itemLi = document.createElement("li");

      itemLi.innerHTML = `
    <a href='${titleFormated}.html' data-id='${id}' data-type='${type}'>
  <div class="popular-image movie-image">
  <img src="https://image.tmdb.org/t/p/w780${image}" alt="">
</div>
<div class="movie-content">
  <div class="movie-rate">
    <div class="rate">
      ${rate}
      <img src="./assets/icons/star.svg" alt="icon star rate" width="13px" height="13px">
    </div>
  </div>

  <div class="movie-info">
    <div class="info-year">
      ${year}
    </div>
    <div class="info-views">
      <img src="./assets/icons/eye.svg" alt="" width="16px" height="16px">
      <p>${popularity}</p>
    </div>
  </div>
</div>
</a>
  `;

      sectionParent.appendChild(itemLi);
      returnMovie(itemLi.querySelector("a"));
    }
  }
  buildSection();
  carouselContent(idSection);
}
