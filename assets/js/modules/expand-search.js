import outsideClick from "./outside-click.js";

export default function initExpandSearch() {
  const searchContainer = document.querySelector('[data-search="container"]'),
    searchInput = document.querySelector('[data-search="container"] input'),
    landingContainer = document.querySelector(".landing-container"),
    mainContainerContent = document.querySelector("#main-content-container"),
    mainContainerSearch = document.querySelector("#main-search-container");

  const events = ["touchstart", "click"];

  function handleExpandSearch() {
    searchContainer.classList.add("active");
    mainContainerSearch.classList.add("active");
    mainContainerContent.classList.remove("active");
    landingContainer.classList.remove("active");

    outsideClick(searchContainer, events, () => {
      searchContainer.classList.remove("active");
      if (searchInput.value === "") {
        mainContainerSearch.classList.remove("active");
        landingContainer.classList.add("active");
        mainContainerContent.classList.add("active");
      }
    });
  }

  searchContainer.addEventListener("click", handleExpandSearch);
}
