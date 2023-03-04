/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/modules/build-midia-info.js":
/*!***********************************************!*\
  !*** ./assets/js/modules/build-midia-info.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initBuildMidiaInfo)\n/* harmony export */ });\n/* harmony import */ var _build_section_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./build-section.js */ \"./assets/js/modules/build-section.js\");\n\r\n\r\nfunction initBuildMidiaInfo(objMidia) {\r\n  async function getSimilarMidias(type, id) {\r\n    const sectionParent = document.querySelector(\r\n      \"#section-midia-similar .movie-list\"\r\n    );\r\n\r\n    if (sectionParent.children.length) {\r\n      const arrayChildren = Array.from(sectionParent.children);\r\n\r\n      arrayChildren.forEach((item) => {\r\n        sectionParent.removeChild(item);\r\n      });\r\n    }\r\n\r\n    const jsonSimilar = await (\r\n      await fetch(\r\n        `https://api.themoviedb.org/3/${type}/${id}/similar?api_key=25ea17bf3ab54060fea05921b6061c3c&language=en&region=BR`\r\n      )\r\n    ).json();\r\n\r\n    jsonSimilar.results.forEach((midia) => {\r\n      const objMidiaSimilar = {\r\n        rate: midia.vote_average.toFixed(1),\r\n        year: midia.release_date\r\n          ? midia.release_date.slice(0, 4)\r\n          : midia.first_air_date.slice(0, 4),\r\n        popularity: midia.popularity,\r\n        image: midia.poster_path,\r\n        type,\r\n        id,\r\n        title: type === \"movie\" ? midia.title : midia.name,\r\n      };\r\n\r\n      (0,_build_section_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"#section-midia-similar\", objMidiaSimilar);\r\n    });\r\n  }\r\n\r\n  function buildMidiaInfo() {\r\n    const { rate, year, backdrop, type, title, genres, time, id, overview } =\r\n      objMidia;\r\n\r\n    const sectionParentContent = document.querySelector(\r\n      \".section-midia .section-content\"\r\n    );\r\n\r\n    if (backdrop) {\r\n      sectionParentContent.innerHTML = `\r\n      <div class=\"midia-image\">\r\n      <div class=\"filter-image\"></div>\r\n      <img src=\"https://image.tmdb.org/t/p/w780${backdrop}\" alt=\"\">\r\n    </div>\r\n    <div class=\"midia-info\">\r\n      <div class=\"midia-data\">\r\n        <p class=\"data year\">${year}</p>\r\n        <p class=\"data time\">${time}</p>\r\n        <div class=\"rate data year\">\r\n          <p>${rate}</p>\r\n          <img src=\"./assets/icons/star.svg\" alt=\"icon star rate\" width=\"13px\" height=\"13px\">\r\n        </div>\r\n      </div>\r\n    \r\n      <h1 class=\"midia-title\">${title}</h1>\r\n    \r\n      <ul class=\"midia-genres\">\r\n           \r\n      </ul>\r\n    \r\n      <div class=\"midia-description\">\r\n        <h2 class=\"section-title\">Description</h2>\r\n    \r\n        <p class=\"description-text\">${overview}</p>\r\n      </div>\r\n    </div>\r\n      `;\r\n\r\n      const ulGenres = document.querySelector(\".section-midia .midia-genres\");\r\n\r\n      genres.forEach((genre) => {\r\n        const liGenre = document.createElement(\"li\");\r\n        liGenre.innerHTML = `<p>${genre.name}</p>`;\r\n        ulGenres.appendChild(liGenre);\r\n      });\r\n\r\n      const section = document.querySelector(\".section-midia\");\r\n      section.classList.add(\"active\");\r\n      document.title = `Dream | ${title}`;\r\n\r\n      getSimilarMidias(type, id);\r\n    }\r\n  }\r\n\r\n  buildMidiaInfo();\r\n\r\n  const buttonBack = document.querySelector(\".back\");\r\n  buttonBack.addEventListener(\"click\", (event) => {\r\n    event.preventDefault();\r\n\r\n    const section = document.querySelector(\".section-midia\");\r\n    document.title = \"Dream\";\r\n\r\n    section.classList.remove(\"active\");\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://dream-movies/./assets/js/modules/build-midia-info.js?");

/***/ }),

/***/ "./assets/js/modules/build-section.js":
/*!********************************************!*\
  !*** ./assets/js/modules/build-section.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initBuildSection)\n/* harmony export */ });\n/* harmony import */ var _carousel_content_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carousel-content.js */ \"./assets/js/modules/carousel-content.js\");\n/* harmony import */ var _return_movie_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./return-movie.js */ \"./assets/js/modules/return-movie.js\");\n\r\n\r\n\r\nfunction initBuildSection(idSection, objMidiaInfo) {\r\n  function buildSection() {\r\n    const sectionParent = document.querySelector(`${idSection} .movie-list`);\r\n\r\n    const { rate, popularity, year, image, id, type, title } = objMidiaInfo;\r\n\r\n    const padraoRegexp = /[\\s\\W]+/g;\r\n    const titleFormated = title.replace(padraoRegexp, \"-\").toLowerCase();\r\n\r\n    if (image) {\r\n      const itemLi = document.createElement(\"li\");\r\n\r\n      itemLi.innerHTML = `\r\n    <a href='${titleFormated}.html' data-id='${id}' data-type='${type}'>\r\n  <div class=\"popular-image movie-image\">\r\n  <img src=\"https://image.tmdb.org/t/p/w780${image}\" alt=\"\">\r\n</div>\r\n<div class=\"movie-content\">\r\n  <div class=\"movie-rate\">\r\n    <div class=\"rate\">\r\n      ${rate}\r\n      <img src=\"./assets/icons/star.svg\" alt=\"icon star rate\" width=\"13px\" height=\"13px\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"movie-info\">\r\n    <div class=\"info-year\">\r\n      ${year}\r\n    </div>\r\n    <div class=\"info-views\">\r\n      <img src=\"./assets/icons/eye.svg\" alt=\"\" width=\"16px\" height=\"16px\">\r\n      <p>${popularity}</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n</a>\r\n  `;\r\n\r\n      sectionParent.appendChild(itemLi);\r\n      (0,_return_movie_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(itemLi.querySelector(\"a\"));\r\n    }\r\n  }\r\n  buildSection();\r\n  (0,_carousel_content_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(idSection);\r\n}\r\n\n\n//# sourceURL=webpack://dream-movies/./assets/js/modules/build-section.js?");

/***/ }),

/***/ "./assets/js/modules/carousel-content.js":
/*!***********************************************!*\
  !*** ./assets/js/modules/carousel-content.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ carouselContent)\n/* harmony export */ });\nfunction carouselContent(idContainer) {\r\n  const carouselControl = document.querySelectorAll(\r\n    `${idContainer} [data-control]`\r\n  );\r\n  const movieList = document.querySelectorAll(`${idContainer} .movie-list li`);\r\n  const maxMovies = movieList.length;\r\n  let currentItem = 0;\r\n\r\n  movieList[currentItem].classList.add(\"active\");\r\n\r\n  function handleSlide({ target }) {\r\n    if (target.dataset.control === \"left\") {\r\n      currentItem -= 2;\r\n    } else {\r\n      currentItem += 2;\r\n    }\r\n\r\n    if (currentItem >= maxMovies) {\r\n      currentItem = 0;\r\n    }\r\n\r\n    if (currentItem < 0) {\r\n      currentItem = maxMovies - 1;\r\n    }\r\n\r\n    movieList.forEach((item) => item.classList.remove(\".active\"));\r\n\r\n    movieList[currentItem].scrollIntoView({\r\n      behavior: \"smooth\",\r\n      inline: \"center\",\r\n      block: \"nearest\",\r\n    });\r\n\r\n    movieList[currentItem].classList.add(\"active\");\r\n  }\r\n\r\n  carouselControl.forEach((control) => {\r\n    control.addEventListener(\"click\", handleSlide);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://dream-movies/./assets/js/modules/carousel-content.js?");

/***/ }),

/***/ "./assets/js/modules/create-landing-page.js":
/*!**************************************************!*\
  !*** ./assets/js/modules/create-landing-page.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initCreateLandingPage)\n/* harmony export */ });\nasync function initCreateLandingPage() {\r\n  const baseUrl = \"https://api.themoviedb.org/3\";\r\n  const imageUrl = \"https://image.tmdb.org/t/p/w780\";\r\n  const apiKey = \"25ea17bf3ab54060fea05921b6061c3c\";\r\n\r\n  const landingList = document.querySelector(\r\n    \".landing-container .landing-list\"\r\n  );\r\n  const pageRandom = +(Math.random() * 3 + 1).toFixed();\r\n\r\n  const response = await (\r\n    await fetch(\r\n      `${baseUrl}/movie/popular?api_key=${apiKey}&language=pt-BR&region=BR&page=${pageRandom}`\r\n    )\r\n  ).json();\r\n\r\n  const movieRandom = +(Math.random() * response.results.length + 1).toFixed();\r\n  const numMovie = (pageRandom - 1) * 20 + movieRandom;\r\n\r\n  const {\r\n    vote_average: rate,\r\n    overview: description,\r\n    release_date: year,\r\n    backdrop_path: backdropMovie,\r\n    title,\r\n  } = response.results[movieRandom];\r\n\r\n  const itemLi = document.createElement(\"li\");\r\n\r\n  itemLi.classList.add(\"slide-container\");\r\n\r\n  itemLi.innerHTML = `\r\n    <div class=\"landing-content\">\r\n            <div class=\"content-texts\">\r\n            <p class=\"landing-info\">#${numMovie} Popular Movies</p>\r\n              <h1 class=\"landing-title\">${title}\r\n              </h1>\r\n              <p class=\"landing-description\">${description}</p>\r\n              <footer class=\"texts-footer\">\r\n                <p class=\"landing-date\" data-landing=\"date\">${year.slice(\r\n                  0,\r\n                  4\r\n                )}</p>\r\n                <div class=\"rate\">\r\n                  ${rate.toFixed(1)}\r\n                  <img src=\"./assets/icons/star.svg\" alt=\"icon star rate\" width=\"13px\" height=\"13px\">\r\n                </div>\r\n              </footer>\r\n\r\n            </div>\r\n            <div class=\"landing-button-container\">\r\n              <a href=\"#\" class=\"landing-button\">\r\n                watch now\r\n                <img src=\"./assets/icons/play.svg\" alt=\"icon play button\" \">\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <div class=\"landing-image\">\r\n                <img src=\"${imageUrl}${backdropMovie}\" alt=\"image of ${title}\">\r\n            </div>\r\n  `;\r\n\r\n  landingList.appendChild(itemLi);\r\n}\r\n\n\n//# sourceURL=webpack://dream-movies/./assets/js/modules/create-landing-page.js?");

/***/ }),

/***/ "./assets/js/modules/default-infos.js":
/*!********************************************!*\
  !*** ./assets/js/modules/default-infos.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ defaultInfos)\n/* harmony export */ });\n/* harmony import */ var _fetch_movies_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch-movies.js */ \"./assets/js/modules/fetch-movies.js\");\n/* harmony import */ var _fetch_series_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch-series.js */ \"./assets/js/modules/fetch-series.js\");\n\r\n\r\n\r\nfunction defaultInfos() {\r\n  const categories = [\"popular\", \"top_rated\"];\r\n  const idSectionsMovie = [\"#movie-popular\", \"#movie-top-rated\"];\r\n  const idSectionsSerie = [\"#serie-popular\", \"#serie-top-rated\"];\r\n\r\n  const defaultInfoFetch = {\r\n    baseUrl: \"https://api.themoviedb.org/3\",\r\n    apiKey: \"25ea17bf3ab54060fea05921b6061c3c\",\r\n    imageUrl: \"https://image.tmdb.org/t/p/w780\",\r\n  };\r\n\r\n  categories.forEach((category, index) => {\r\n    (0,_fetch_movies_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(category, idSectionsMovie[index], defaultInfoFetch);\r\n    (0,_fetch_series_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(category, idSectionsSerie[index], defaultInfoFetch);\r\n  });\r\n\r\n  return defaultInfoFetch;\r\n}\r\n\n\n//# sourceURL=webpack://dream-movies/./assets/js/modules/default-infos.js?");

/***/ }),

/***/ "./assets/js/modules/expand-search.js":
/*!********************************************!*\
  !*** ./assets/js/modules/expand-search.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initExpandSearch)\n/* harmony export */ });\n/* harmony import */ var _outside_click_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outside-click.js */ \"./assets/js/modules/outside-click.js\");\n\r\n\r\nfunction initExpandSearch() {\r\n  const searchContainer = document.querySelector('[data-search=\"container\"]');\r\n  const searchInput = document.querySelector('[data-search=\"container\"] input');\r\n  const landingContainer = document.querySelector(\".landing-container\");\r\n  const mainContainerContent = document.querySelector(\r\n    \"#main-content-container\"\r\n  );\r\n  const mainContainerSearch = document.querySelector(\"#main-search-container\");\r\n\r\n  const events = [\"touchstart\", \"click\"];\r\n\r\n  function handleExpandSearch() {\r\n    searchContainer.classList.add(\"active\");\r\n    mainContainerSearch.classList.add(\"active\");\r\n    mainContainerContent.classList.remove(\"active\");\r\n    landingContainer.classList.remove(\"active\");\r\n\r\n    (0,_outside_click_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(searchContainer, events, () => {\r\n      searchContainer.classList.remove(\"active\");\r\n      if (searchInput.value === \"\") {\r\n        mainContainerSearch.classList.remove(\"active\");\r\n        landingContainer.classList.add(\"active\");\r\n        mainContainerContent.classList.add(\"active\");\r\n      }\r\n    });\r\n  }\r\n\r\n  searchContainer.addEventListener(\"click\", handleExpandSearch);\r\n}\r\n\n\n//# sourceURL=webpack://dream-movies/./assets/js/modules/expand-search.js?");

/***/ }),

/***/ "./assets/js/modules/fetch-movies.js":
/*!*******************************************!*\
  !*** ./assets/js/modules/fetch-movies.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchMovie)\n/* harmony export */ });\n/* harmony import */ var _build_section_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./build-section.js */ \"./assets/js/modules/build-section.js\");\n\r\n\r\nasync function fetchMovie(category, idSection, objInfos) {\r\n  const { baseUrl, apiKey } = objInfos;\r\n\r\n  const response = await (\r\n    await fetch(\r\n      `${baseUrl}/movie/${category}?api_key=${apiKey}&page=1&language=pt-BR&region=BR`\r\n    )\r\n  ).json();\r\n\r\n  response.results.forEach((item) => {\r\n    if (item.backdrop_path) {\r\n      const objMidiaInfo = {\r\n        rate: item.vote_average.toFixed(1),\r\n        popularity: item.popularity,\r\n        year: item.release_date.slice(0, 4),\r\n        image: item.poster_path,\r\n        backdrop: item.poster_path,\r\n        id: item.id,\r\n        type: \"movie\",\r\n        title: item.title,\r\n      };\r\n      (0,_build_section_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(idSection, objMidiaInfo);\r\n    }\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://dream-movies/./assets/js/modules/fetch-movies.js?");

/***/ }),

/***/ "./assets/js/modules/fetch-series.js":
/*!*******************************************!*\
  !*** ./assets/js/modules/fetch-series.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchSerie)\n/* harmony export */ });\n/* harmony import */ var _build_section_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./build-section.js */ \"./assets/js/modules/build-section.js\");\n\r\n\r\nasync function fetchSerie(category, idSection, objInfos) {\r\n  const { baseUrl, apiKey } = objInfos;\r\n\r\n  const response = await (\r\n    await fetch(\r\n      `${baseUrl}/tv/${category}?api_key=${apiKey}&page=1&language=pt-BR&region=BR`\r\n    )\r\n  ).json();\r\n\r\n  response.results.forEach((item) => {\r\n    if (item.backdrop_path) {\r\n      const objMidiaInfo = {\r\n        rate: item.vote_average.toFixed(1),\r\n        popularity: item.popularity,\r\n        year: item.first_air_date.slice(0, 4),\r\n        backdrop: item.backdrop_path,\r\n        image: item.poster_path,\r\n        id: item.id,\r\n        type: \"tv\",\r\n        title: item.name,\r\n      };\r\n\r\n      (0,_build_section_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(idSection, objMidiaInfo);\r\n    }\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://dream-movies/./assets/js/modules/fetch-series.js?");

/***/ }),

/***/ "./assets/js/modules/handle-search.js":
/*!********************************************!*\
  !*** ./assets/js/modules/handle-search.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initHandleSearch)\n/* harmony export */ });\n/* harmony import */ var _default_infos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-infos.js */ \"./assets/js/modules/default-infos.js\");\n/* harmony import */ var _build_section_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./build-section.js */ \"./assets/js/modules/build-section.js\");\n\r\n\r\n\r\nfunction initHandleSearch() {\r\n  const searchInput = document.querySelector('[data-search=\"container\"] input');\r\n  const sectionTitle = document.querySelector(\r\n    \"#main-search-container .section-title\"\r\n  );\r\n  const movieList = document.querySelector(\r\n    \"#main-search-container .movie-list\"\r\n  );\r\n\r\n  const timer = 1000;\r\n\r\n  const { apiKey, baseUrl } = (0,_default_infos_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n  function handleSearch(search) {\r\n    fetch(\r\n      `${baseUrl}/search/movie?api_key=${apiKey}&language=en&region=BR&query=${search}&include_adult=false`\r\n    )\r\n      .then((r) => r.json())\r\n      .then((json) => {\r\n        if (movieList.children.length) {\r\n          const arrayChildren = Array.from(movieList.children);\r\n          sectionTitle.innerText = \"Search by movies\";\r\n\r\n          arrayChildren.forEach((item) => {\r\n            movieList.removeChild(item);\r\n          });\r\n        }\r\n\r\n        json.results.forEach((item) => {\r\n          if (item.backdrop_path) {\r\n            const objMidiaInfo = {\r\n              rate: item.vote_average,\r\n              popularity: item.popularity,\r\n              year: item.release_date.slice(0, 4),\r\n              backdrop: item.backdrop_path,\r\n              image: item.poster_path,\r\n              id: item.id,\r\n              type: \"movie\",\r\n              title: item.title,\r\n            };\r\n\r\n            (0,_build_section_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"#main-search-container\", objMidiaInfo);\r\n          }\r\n        });\r\n      });\r\n  }\r\n\r\n  function start() {\r\n    setTimeout(() => {\r\n      handleSearch(searchInput.value);\r\n    }, timer);\r\n  }\r\n\r\n  searchInput.addEventListener(\"keydown\", start);\r\n}\r\n\n\n//# sourceURL=webpack://dream-movies/./assets/js/modules/handle-search.js?");

/***/ }),

/***/ "./assets/js/modules/menu-mobile.js":
/*!******************************************!*\
  !*** ./assets/js/modules/menu-mobile.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outside_click_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outside-click.js */ \"./assets/js/modules/outside-click.js\");\n\r\n\r\nfunction initMenuMobile() {\r\n  const btnMenu = document.querySelector('[data-menu=\"button\"]');\r\n\r\n  const events = [\"touchstart\", \"click\"];\r\n\r\n  function openMenu() {\r\n    const containerMenu = document.querySelector('[data-menu=\"container\"]');\r\n    btnMenu.classList.add(\"active\");\r\n    containerMenu.classList.add(\"active\");\r\n\r\n    (0,_outside_click_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(containerMenu, events, () => {\r\n      btnMenu.classList.remove(\"active\");\r\n      containerMenu.classList.remove(\"active\");\r\n    });\r\n  }\r\n\r\n  btnMenu.addEventListener(\"click\", openMenu);\r\n}\r\n\n\n//# sourceURL=webpack://dream-movies/./assets/js/modules/menu-mobile.js?");

/***/ }),

/***/ "./assets/js/modules/outside-click.js":
/*!********************************************!*\
  !*** ./assets/js/modules/outside-click.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\r\n  const html = document.documentElement;\r\n  const outside = \"data-outside\";\r\n\r\n  function handleOutsideClick({ target }) {\r\n    if (!element.contains(target)) {\r\n      element.removeAttribute(outside);\r\n      events.forEach((userEvents) => {\r\n        html.removeEventListener(userEvents, handleOutsideClick);\r\n      });\r\n      callback();\r\n    }\r\n  }\r\n\r\n  if (!element.hasAttribute(outside)) {\r\n    events.forEach((userEvents) => {\r\n      setTimeout(() => {\r\n        html.addEventListener(userEvents, handleOutsideClick);\r\n      });\r\n\r\n      element.setAttribute(outside, \"\");\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://dream-movies/./assets/js/modules/outside-click.js?");

/***/ }),

/***/ "./assets/js/modules/return-movie.js":
/*!*******************************************!*\
  !*** ./assets/js/modules/return-movie.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ returnMovie)\n/* harmony export */ });\n/* harmony import */ var _build_midia_info_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./build-midia-info.js */ \"./assets/js/modules/build-midia-info.js\");\n\r\n\r\nfunction returnMovie(link) {\r\n  async function getDataMidia(id, type) {\r\n    const jsonMidia = await (\r\n      await fetch(\r\n        `https://api.themoviedb.org/3/${type}/${id}?api_key=25ea17bf3ab54060fea05921b6061c3c&language=pt-BR&region=BR`\r\n      )\r\n    ).json();\r\n\r\n    const objMidiaInfo = {\r\n      rate: jsonMidia.vote_average.toFixed(1),\r\n      year: jsonMidia.release_date\r\n        ? jsonMidia.release_date.slice(0, 4)\r\n        : jsonMidia.first_air_date.slice(0, 4),\r\n      backdrop: jsonMidia.backdrop_path,\r\n      type,\r\n      title: jsonMidia.title ? jsonMidia.title : jsonMidia.name,\r\n      genres: jsonMidia.genres,\r\n      time:\r\n        type === \"movie\"\r\n          ? `${jsonMidia.runtime}min`\r\n          : `${jsonMidia.number_of_seasons} season(s)`,\r\n      id,\r\n      overview: jsonMidia.overview,\r\n    };\r\n\r\n    (0,_build_midia_info_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(objMidiaInfo);\r\n  }\r\n\r\n  function getMovie(event) {\r\n    event.preventDefault();\r\n\r\n    window.scrollTo({\r\n      top: 0,\r\n      behavior: \"smooth\",\r\n    });\r\n\r\n    const { target } = event;\r\n\r\n    const midiaId = target.dataset.id;\r\n    const midiaType = target.dataset.type;\r\n\r\n    getDataMidia(midiaId, midiaType);\r\n  }\r\n\r\n  link.addEventListener(\"click\", getMovie);\r\n}\r\n\n\n//# sourceURL=webpack://dream-movies/./assets/js/modules/return-movie.js?");

/***/ }),

/***/ "./assets/js/script.js":
/*!*****************************!*\
  !*** ./assets/js/script.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./assets/js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_expand_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/expand-search.js */ \"./assets/js/modules/expand-search.js\");\n/* harmony import */ var _modules_create_landing_page_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/create-landing-page.js */ \"./assets/js/modules/create-landing-page.js\");\n/* harmony import */ var _modules_handle_search_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/handle-search.js */ \"./assets/js/modules/handle-search.js\");\n/* harmony import */ var _modules_default_infos_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/default-infos.js */ \"./assets/js/modules/default-infos.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_expand_search_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_create_landing_page_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_handle_search_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_default_infos_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n\n\n//# sourceURL=webpack://dream-movies/./assets/js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/js/script.js");
/******/ 	
/******/ })()
;