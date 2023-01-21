import initBuildSection from "./build-section.js";

export default async function fetchSerie(category, idSection, objInfos) {
  const { baseUrl, apiKey } = objInfos;

  const response = await (
    await fetch(
      `${baseUrl}/tv/${category}?api_key=${apiKey}&page=1&language=en&region=BR`
    )
  ).json();

  response.results.forEach((item) => {
    const objMidiaInfo = {
      rate: item.vote_average,
      popularity: item.popularity,
      year: item.first_air_date,
      imageMidia: item.poster_path,
      idMidia: item.id,
      type: "tv",
    };

    initBuildSection(idSection, objMidiaInfo);
  });
}
