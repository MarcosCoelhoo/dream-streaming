import initBuildSection from "./build-section.js";

export default async function fetchMovie(category, idSection, objInfos) {
  const { baseUrl, apiKey } = objInfos;

  const response = await (
    await fetch(
      `${baseUrl}/movie/${category}?api_key=${apiKey}&page=1&language=en&region=BR`
    )
  ).json();

  response.results.forEach((item) => {
    if (item.backdrop_path) {
      const objMidiaInfo = {
        rate: item.vote_average.toFixed(1),
        popularity: item.popularity,
        year: item.release_date.slice(0, 4),
        image: item.poster_path,
        backdrop: item.poster_path,
        id: item.id,
        type: "movie",
        title: item.title,
      };
      initBuildSection(idSection, objMidiaInfo);
    }
  });
}
