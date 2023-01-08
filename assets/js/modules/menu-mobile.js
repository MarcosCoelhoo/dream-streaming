import outsideClick from "./outside-click.js";

export default function initMenuMobile() {
  const btnMenu = document.querySelector('[data-menu="button"]');

  const events = ["touchstart", "click"];

  function openMenu() {
    const containerMenu = document.querySelector('[data-menu="container"]');
    btnMenu.classList.add("active");
    containerMenu.classList.add("active");

    outsideClick(containerMenu, events, () => {
      btnMenu.classList.remove("active");
      containerMenu.classList.remove("active");
    });
  }

  btnMenu.addEventListener("click", openMenu);
}
