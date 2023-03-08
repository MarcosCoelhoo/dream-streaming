import BuildSection from "./build-section.js";
import debounce from "./debounce.js";

export default class HandleSearch {
  constructor(
    idSection,
    searchInput,
    sectionTitle,
    movieList,
    baseUrl,
    apiKey
  ) {
    this.idSection = idSection;
    this.searchInput = document.querySelector(searchInput);
    this.sectionTitle = document.querySelector(sectionTitle);
    this.movieList = document.querySelector(movieList);
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;

    // Faz o debounce para o evento
    // não ativar tantas vezes
    this.fetchSearch = debounce(this.fetchSearch.bind(this), 200);
  }

  async fetchSearch() {
    const search = this.searchInput.value;

    const jsonMidia = await (
      await fetch(
        `${this.baseUrl}/search/movie?api_key=${this.apiKey}&language=en&region=BR&query=${search}&include_adult=false`
      )
    ).json();

    // Verifica se a lista de filmes tem tamanho
    // então remove todos os filmes da lista
    if (this.movieList.children.length) {
      const arrayChildren = [...this.movieList.children];
      this.sectionTitle.innerText = "Search by movies";

      arrayChildren.forEach((item) => {
        this.movieList.removeChild(item);
      });
    }

    jsonMidia.results.forEach((item) => {
      if (item.backdrop_path) {
        const objMidiaInfo = {
          rate: item.vote_average.toFixed(1),
          popularity: item.popularity,
          year: item.release_date.slice(0, 4),
          backdrop: item.backdrop_path,
          image: item.poster_path,
          id: item.id,
          type: "movie",
          title: item.title,
        };

        const buildSection = new BuildSection(this.idSection, objMidiaInfo);
        buildSection.init();
      }
    });
  }

  addEventSearch() {
    this.searchInput.addEventListener("keyup", this.fetchSearch);
  }

  init() {
    this.addEventSearch();
    return this;
  }
}
