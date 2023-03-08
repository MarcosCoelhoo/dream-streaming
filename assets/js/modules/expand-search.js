import outsideClick from "./outside-click.js";

export default class ExpandSearch {
  constructor(
    containerSearch,
    searchInput,
    landingContainer,
    mainContainerContent,
    mainContainerSearch
  ) {
    this.containerSearch = document.querySelector(containerSearch);
    this.searchInput = document.querySelector(searchInput);
    this.landingContainer = document.querySelector(landingContainer);
    this.mainContainerContent = document.querySelector(mainContainerContent);
    this.mainContainerSearch = document.querySelector(mainContainerSearch);

    this.events = ["touchstart", "click"];
    this.activeClass = "active";

    this.handleExpandSearch = this.handleExpandSearch.bind(this);
  }

  handleExpandSearch() {
    // Adiciona a classe active para mostrar
    //  o mainContainerSearch e o containerSearch
    this.containerSearch.classList.add(this.activeClass);
    this.mainContainerSearch.classList.add(this.activeClass);

    // E retira classe para desaparecer o
    // mainContainerContent e o landingContainer
    this.mainContainerContent.classList.remove(this.activeClass);
    this.landingContainer.classList.remove(this.activeClass);

    outsideClick(this.containerSearch, this.events, () => {
      this.containerSearch.classList.remove(this.activeClass);
      if (this.searchInput.value === "") {
        this.mainContainerSearch.classList.remove(this.activeClass);
        this.landingContainer.classList.add(this.activeClass);
        this.mainContainerContent.classList.add(this.activeClass);
      }
    });
  }

  init() {
    this.containerSearch.addEventListener("click", this.handleExpandSearch);
  }
}
