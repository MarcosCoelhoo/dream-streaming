import initBuildSection from "./build-section.js";

export default async function fetchSerie(category, idSection, objInfos) {
  const { baseUrl, apiKey } = objInfos;

  const response = await (
    await fetch(
      `${baseUrl}/tv/${category}?api_key=${apiKey}&page=1&language=pt-BR&region=BR`
    )
  ).json();

  response.results.forEach((item) => {
    if (item.backdrop_path) {
      const objMidiaInfo = {
        rate: item.vote_average.toFixed(1),
        popularity: item.popularity,
        year: item.first_air_date.slice(0, 4),
        backdrop: item.backdrop_path,
        image: item.poster_path,
        id: item.id,
        type: "tv",
        title: item.name,
      };

      initBuildSection(idSection, objMidiaInfo);
    }
  });
}
