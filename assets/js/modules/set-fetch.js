import initBuildSection from "./build-section.js";

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

  startFetch() {
    fetch(
      `${this.baseUrl}/${this.typeMidiaFetch}/${this.category}?api_key=${this.apiKey}&page=1&language=pt-BR&region=BR`
    )
      .then((resp) => resp.json())
      .then((midiaJson) => {
        midiaJson.results.forEach((midia) => {
          const obj = this.getDataMidia(midia);
          initBuildSection(this.idSection, obj);
        });
      });
  }

  init() {
    this.startFetch();
  }

  // response.results.forEach((item) => {
  //   if (item.backdrop_path) {
  //     const objMidiaInfo = {
  //       rate: item.vote_average.toFixed(1),
  //       popularity: item.popularity,
  //       year: item.release_date.slice(0, 4),
  //       image: item.poster_path,
  //       backdrop: item.poster_path,
  //       id: item.id,
  //       type: "midia",
  //       title: item.title,
  //     };
  //     initBuildSection(idSection, objMidiaInfo);
  //   }
  // });
}
