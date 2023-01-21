import initBuildSection from "./build-section.js";

export default async function fetchMovie(category, idSection, objInfos) {
  const { baseUrl, apiKey } = objInfos;

  const response = await (
    await fetch(
      `${baseUrl}/movie/${category}?api_key=${apiKey}&page=1&language=en&region=BR`
    )
  ).json();

  response.results.forEach((item) => {
    const objMidiaInfo = {
      rate: item.vote_average,
      popularity: item.popularity,
      year: item.release_date,
      imageMidia: item.poster_path,
      idMidia: item.id,
      type: "movie",
    };
    initBuildSection(idSection, objMidiaInfo);
  });
}
