import outsideClick from "./outside-click.js";

export default class MenuMobile {
  constructor(btnMenu, containerMenu) {
    this.btnMenu = document.querySelector(btnMenu);
    this.containerMenu = document.querySelector(containerMenu);
    this.events = ["touchstart", "click"];
    this.activeClass = "active";

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.btnMenu.classList.add(this.activeClass);
    this.containerMenu.classList.add(this.activeClass);

    outsideClick(this.containerMenu, this.events, () => {
      this.btnMenu.classList.remove(this.activeClass);
      this.containerMenu.classList.remove(this.activeClass);
    });
  }

  init() {
    this.btnMenu.addEventListener("click", this.openMenu);
  }
}
