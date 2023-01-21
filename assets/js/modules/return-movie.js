export default function returnMovie(idSection) {
  idSection.addEventListener("click", ({ target }) => {
    const midiaId = target.dataset.id;
    const midiaType = target.dataset.type;
    console.log(midiaId);
    fetch(
      `https://api.themoviedb.org/3/${midiaType}/${midiaId}?api_key=25ea17bf3ab54060fea05921b6061c3c&language=en&region=BR`
    )
      .then((r) => r.json())
      .then((json) => {
        const infoMidia = {
          dateMovie: json.release_date,
          dateSerie: json.first_air_date,
          popularity: json.popularity,
          overview: json.overview,
          imageMovie: json.poster_path,
          link: json.homepage,
          titleMovie: json.title,
          titleMovie: json.name,
          rate: json.vote_average,
        };
        console.log(infoMidia);

        // const padraoRegexp = /[\s\W]+/g;
        // const titleFormated = json.title
        //   .replace(padraoRegexp, "-")
        //   .toLowerCase();

        // window.history.pushState(null, null, `${titleFormated}.html`);
      });
  });
}
