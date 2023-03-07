import BuildSection from "./build-section.js";

export default class SetFetch {
  constructor(baseUrl, apiKey, imageUrl, category, idSection, typeMidiaFetch) {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
    this.category = category;
    this.imageUrl = imageUrl;
    this.idSection = idSection;
    this.typeMidiaFetch = typeMidiaFetch;
  }

  getDataMidia(midia) {
    return {
      rate: midia.vote_average.toFixed(1),
      popularity: midia.popularity,
      year: midia.release_date
        ? midia.release_date.slice(0, 4)
        : midia.first_air_date.slice(0, 4),
      image: `${this.imageUrl}${midia.poster_path}`,
      backdrop: `${this.imageUrl}${midia.backdrop_path}`,
      id: midia.id,
      type: this.typeMidiaFetch,
      title: midia.title ? midia.title : midia.name,
    };
  }

  async startFetch() {
    const midiaJson = await (
      await fetch(
        `${this.baseUrl}/${this.typeMidiaFetch}/${this.category}?api_key=${this.apiKey}&page=1&language=pt-BR&region=BR`
      )
    ).json();

    midiaJson.results.forEach((midia) => {
      // ativa a função getDataMidia pra receber
      // o objeto com os dados escolhidos
      const obj = this.getDataMidia(midia);

      const buildSection = new BuildSection(this.idSection, obj);
      buildSection.init();
    });
  }

  init() {
    this.startFetch();
    return this;
  }
}
