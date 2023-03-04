import initBuildSection from "./build-section.js";

export default function initBuildMidiaInfo(objMidia) {
  function buildMidiaInfo() {
    const { rate, year, backdrop, type, title, genres, time, id, overview } =
      objMidia;

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
        const liGenre = document.createElement("li");
        liGenre.innerHTML = `<p>${genre.name}</p>`;
        ulGenres.appendChild(liGenre);
      });

      const section = document.querySelector(".section-midia");
      section.classList.add("active");
      document.title = `Dream | ${title}`;

      getSimilarMidias(type, id);
    }
  }

  buildMidiaInfo();

  async function getSimilarMidias(type, id) {
    const sectionParent = document.querySelector(
      "#section-midia-similar .movie-list"
    );

    if (sectionParent.children.length) {
      const arrayChildren = Array.from(sectionParent.children);

      arrayChildren.forEach((item) => {
        sectionParent.removeChild(item);
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

      initBuildSection("#section-midia-similar", objMidiaSimilar);
    });
  }

  const buttonBack = document.querySelector(".back");
  buttonBack.addEventListener("click", (event) => {
    event.preventDefault();

    const section = document.querySelector(".section-midia");
    document.title = "Dream";

    section.classList.remove("active");
  });
}
