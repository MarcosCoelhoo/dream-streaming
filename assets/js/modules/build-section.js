import carouselContent from "./carousel-content.js";
import returnMovie from "./return-movie.js";

export default function initBuildSection(idSection, objMidiaInfo) {
  function buildSection() {
    const sectionParent = document.querySelector(`${idSection} .movie-list`);

    const { rate, popularity, year, imageMidia, idMidia, type } = objMidiaInfo;

    const itemLi = document.createElement("li");

    itemLi.dataset.id = idMidia;
    itemLi.dataset.type = type;

    itemLi.innerHTML = `
  <div class="popular-image movie-image">
  <img src="https://image.tmdb.org/t/p/w780${imageMidia}" alt="">
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

    sectionParent.appendChild(itemLi);
    returnMovie(itemLi);
  }
  buildSection();
  carouselContent(idSection);
}
