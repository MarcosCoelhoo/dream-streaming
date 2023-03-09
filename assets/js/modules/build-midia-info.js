import BuildSection from "./build-section.js";

export default class BuildMidiaInfo {
  constructor(objMidia, idSectionSimilar) {
    this.idSectionSimilar = idSectionSimilar;
    this.sectionParent = document.querySelector(
      `${idSectionSimilar} .movie-list`
    );
    this.objMidia = objMidia;
  }

  async getSimilarMidias(type, id) {
    if (this.sectionParent.children.length) {
      const arrayChildren = [...this.sectionParent.children];

      arrayChildren.forEach((item) => {
        this.sectionParent.removeChild(item);
      });
    }

    const jsonSimilar = await (
      await fetch(
        `https://api.themoviedb.org/3/${type}/${id}/similar?api_key=25ea17bf3ab54060fea05921b6061c3c&language=en&region=BR`
      )
    ).json();

    jsonSimilar.results.forEach((midia) => {
      const objMidiaSimilar = {
        rate: midia.vote_average.toFixed(1),
        year: midia.release_date
          ? midia.release_date.slice(0, 4)
          : midia.first_air_date.slice(0, 4),
        popularity: midia.popularity,
        image: midia.poster_path,
        type,
        id,
        title: type === "movie" ? midia.title : midia.name,
      };

      const buildSection = new BuildSection(
        this.idSectionSimilar,
        objMidiaSimilar
      );
      buildSection.init();
    });
  }

  buildMidiaInfo() {
    const { rate, year, backdrop, type, title, genres, time, id, overview } =
      this.objMidia;

    const sectionParentContent = document.querySelector(
      ".section-midia .section-content"
    );

    if (backdrop) {
      sectionParentContent.innerHTML = `
      <div class="midia-image">
      <div class="filter-image"></div>
      <img src="https://image.tmdb.org/t/p/w780${backdrop}" alt="">
    </div>
    <div class="midia-info">
      <div class="midia-data">
        <p class="data year">${year}</p>
        <p class="data time">${time}</p>
        <div class="rate data year">
          <p>${rate}</p>
          <img src="./assets/icons/star.svg" alt="icon star rate" width="13px" height="13px">
        </div>
      </div>
    
      <h1 class="midia-title">${title}</h1>
    
      <ul class="midia-genres">
           
      </ul>
    
      <div class="midia-description">
        <h2 class="section-title">Description</h2>
    
        <p class="description-text">${overview}</p>
      </div>
    </div>
      `;

      const ulGenres = document.querySelector(".section-midia .midia-genres");

      genres.forEach((genre) => {
        ulGenres.innerHTML += `<li><p>${genre.name}</p></li>`;
      });

      const section = document.querySelector(".section-midia");
      section.classList.add("active");
      document.title = `Dream | ${title}`;

      this.getSimilarMidias(type, id);
    }
  }

  static addEventButtonBack() {
    const buttonBack = document.querySelector(".back");
    buttonBack.addEventListener("click", (event) => {
      event.preventDefault();

      const section = document.querySelector(".section-midia");
      document.title = "Dream | Home";

      section.classList.remove("active");
    });
  }

  init() {
    this.buildMidiaInfo();
    this.constructor.addEventButtonBack();
    return this;
  }
}
