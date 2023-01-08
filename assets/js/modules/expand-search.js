export default function initExpandSearch() {}

import outsideClick from "./outside-click.js";

const searchContainer = document.querySelector('[data-search="container"]');

const events = ["touchstart", "click"];

function handleExpandSearch({ target }) {
  searchContainer.classList.add("active");
  outsideClick(searchContainer, events, () => {
    searchContainer.classList.remove("active");
  });
}

searchContainer.addEventListener("click", handleExpandSearch);

console.log(searchContainer);
