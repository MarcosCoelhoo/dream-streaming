export default function carouselContent(idContainer) {
  const carouselControl = document.querySelectorAll(
      `${idContainer} [data-control]`
    ),
    movieList = document.querySelectorAll(`${idContainer} .movie-list li`),
    maxMovies = movieList.length;
  let currentItem = 0;

  movieList[currentItem].classList.add("active");

  function handleSlide({ target }) {
    if (target.dataset.control === "left") {
      currentItem -= 2;
    } else {
      currentItem += 2;
    }

    if (currentItem >= maxMovies) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxMovies - 1;
    }

    movieList.forEach((item) => item.classList.remove(".active"));

    movieList[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });

    movieList[currentItem].classList.add("active");
  }

  carouselControl.forEach((control) => {
    control.addEventListener("click", handleSlide);
  });
}
