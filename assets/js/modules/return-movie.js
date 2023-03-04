import initBuildMidiaInfo from "./build-midia-info.js";

export default function returnMovie(link) {
  async function getDataMidia(id, type) {
    const jsonMidia = await (
      await fetch(
        `https://api.themoviedb.org/3/${type}/${id}?api_key=25ea17bf3ab54060fea05921b6061c3c&language=pt-BR&region=BR`
      )
    ).json();

    const objMidiaInfo = {
      rate: jsonMidia.vote_average.toFixed(1),
      year: jsonMidia.release_date
        ? jsonMidia.release_date.slice(0, 4)
        : jsonMidia.first_air_date.slice(0, 4),
      backdrop: jsonMidia.backdrop_path,
      type,
      title: jsonMidia.title ? jsonMidia.title : jsonMidia.name,
      genres: jsonMidia.genres,
      time:
        type === "movie"
          ? `${jsonMidia.runtime}min`
          : `${jsonMidia.number_of_seasons} season(s)`,
      id,
      overview: jsonMidia.overview,
    };

    initBuildMidiaInfo(objMidiaInfo);
  }

  function getMovie(event) {
    event.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    const { target } = event;

    const midiaId = target.dataset.id;
    const midiaType = target.dataset.type;

    getDataMidia(midiaId, midiaType);
  }

  link.addEventListener("click", getMovie);
}
