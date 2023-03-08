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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BuildSection)\n/* harmony export */ });\n/* harmony import */ var _carousel_content_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carousel-content.js */ \"./assets/js/modules/carousel-content.js\");\n/* harmony import */ var _return_movie_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./return-movie.js */ \"./assets/js/modules/return-movie.js\");\n\r\n\r\n\r\nclass BuildSection {\r\n  constructor(idSection, objMidiaInfo) {\r\n    this.objMidiaInfo = objMidiaInfo;\r\n    this.idSection = idSection;\r\n    this.parentMidiaList = document.querySelector(`${idSection} .movie-list`);\r\n  }\r\n\r\n  buildSection() {\r\n    const { rate, popularity, year, image, id, type, title } =\r\n      this.objMidiaInfo;\r\n\r\n    const padraoRegexp = /[\\s\\W]+/g;\r\n    const titleFormated = title.replace(padraoRegexp, \"-\").toLowerCase();\r\n\r\n    // verifica se a midia tem imagem\r\n    // caso não tenho ela não é adicionada\r\n    if (image) {\r\n      const itemLi = document.createElement(\"li\");\r\n\r\n      itemLi.innerHTML = `\r\n    <a href='${titleFormated}.html' data-id='${id}' data-type='${type}'>\r\n  <div class=\"popular-image movie-image\">\r\n  <img src=\"https://image.tmdb.org/t/p/w780${image}\" alt=\"\">\r\n</div>\r\n<div class=\"movie-content\">\r\n  <div class=\"movie-rate\">\r\n    <div class=\"rate\">\r\n      ${rate}\r\n      <img src=\"./assets/icons/star.svg\" alt=\"icon star rate\" width=\"13px\" height=\"13px\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"movie-info\">\r\n    <div class=\"info-year\">\r\n      ${year}\r\n    </div>\r\n    <div class=\"info-views\">\r\n      <img src=\"./assets/icons/eye.svg\" alt=\"\" width=\"16px\" height=\"16px\">\r\n      <p>${popularity}</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n</a>\r\n  `;\r\n\r\n      this.parentMidiaList.appendChild(itemLi);\r\n      (0,_return_movie_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(itemLi.querySelector(\"a\"));\r\n    }\r\n  }\r\n\r\n  init() {\r\n    this.buildSection();\r\n    (0,_carousel_content_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.idSection);\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://dream-movies/./assets/js/modules/build-section.js?");

/***/ }),

/***/ "./assets/js/modules/carousel-content.js":
/*!***********************************************!*\
  !*** ./assets/js/modules/carousel-content.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ carouselContent)\n/* harmony export */ });\nfunction carouselContent(idContainer) {\r\n  const carouselControl = document.querySelectorAll(\r\n    `${idContainer} [data-control]`\r\n  );\r\n  const movieList = document.querySelectorAll(`${idContainer} .movie-list li`);\r\n  const maxMovies = movieList.length;\r\n  let currentItem = 0;\r\n\r\n  movieList[currentItem].classList.add(\"active\");\r\n\r\n  function handleSlide({ target }) {\r\n    if (target.dataset.control === \"left\") {\r\n      currentItem -= 2;\r\n    } else {\r\n      currentItem += 2;\r\n    }\r\n\r\n    if (currentItem >= maxMovies) {\r\n      currentItem = 0;\r\n    }\r\n\r\n    if (currentItem < 0) {\r\n      currentItem = maxMovies - 1;\r\n    }\r\n\r\n    movieList.forEach((item) => item.classList.remove(\".active\"));\r\n\r\n    movieList[currentItem].scrollIntoView({\r\n      behavior: \"smooth\",\r\n      inline: \"center\",\r\n      block: \"nearest\",\r\n    });\r\n\r\n    movieList[currentItem].classList.add(\"active\");\r\n  }\r\n\r\n  carouselControl.forEach((control) => {\r\n    control.addEventListener(\"click\", handleSlide);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://dream-movies/./assets/js/modules/carousel-content.js?");

/***/ }),

/***/ "./assets/js/modules/create-landing.js":
/*!*********************************************!*\
  !*** ./assets/js/modules/create-landing.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CreateLandingPage)\n/* harmony export */ });\nclass CreateLandingPage {\r\n  constructor(baseUrl, apiKey, imageUrl, section) {\r\n    this.baseUrl = baseUrl;\r\n    this.imageUrl = imageUrl;\r\n    this.apiKey = apiKey;\r\n    this.sectionLanding = document.querySelector(section);\r\n    this.classItem = \"slide-container\";\r\n  }\r\n\r\n  async buildLanding() {\r\n    const pageRandom = +(Math.random() * 3 + 1).toFixed();\r\n\r\n    const midiaJson = await (\r\n      await fetch(\r\n        `${this.baseUrl}/movie/popular?api_key=${this.apiKey}&language=pt-BR&region=BR&page=${pageRandom}`\r\n      )\r\n    ).json();\r\n\r\n    // Seleciona um filme aleatorio do objeto e\r\n    // deixa o resultado sem casas decimais\r\n    const movieRandom = +(\r\n      Math.random() *\r\n      (midiaJson.results.length - 1)\r\n    ).toFixed();\r\n\r\n    const numMovie = pageRandom * 20 + movieRandom;\r\n\r\n    const {\r\n      vote_average: rate,\r\n      overview: description,\r\n      release_date: year,\r\n      backdrop_path: backdropMovie,\r\n      title,\r\n    } = midiaJson.results[movieRandom];\r\n\r\n    const itemLi = document.createElement(\"li\");\r\n\r\n    itemLi.classList.add(this.classItem);\r\n\r\n    itemLi.innerHTML = `\r\n      <div class=\"landing-content\">\r\n              <div class=\"content-texts\">\r\n              <p class=\"landing-info\">#${numMovie} Popular Movies</p>\r\n                <h1 class=\"landing-title\">${title}\r\n                </h1>\r\n                <p class=\"landing-description\">${description}</p>\r\n                <footer class=\"texts-footer\">\r\n                  <p class=\"landing-date\" data-landing=\"date\">${year.slice(\r\n                    0,\r\n                    4\r\n                  )}</p>\r\n                  <div class=\"rate\">\r\n                    ${rate.toFixed(1)}\r\n                    <img src=\"./assets/icons/star.svg\" alt=\"icon star rate\" width=\"13px\" height=\"13px\">\r\n                  </div>\r\n                </footer>\r\n  \r\n              </div>\r\n              <div class=\"landing-button-container\">\r\n                <a href=\"#\" class=\"landing-button\">\r\n                  watch now\r\n                  <img src=\"./assets/icons/play.svg\" alt=\"icon play button\" \">\r\n                  </a>\r\n                </div>\r\n              </div>\r\n              <div class=\"landing-image\">\r\n                  <img src=\"${\r\n                    this.imageUrl\r\n                  }${backdropMovie}\" alt=\"poster of ${title}\">\r\n              </div>\r\n    `;\r\n\r\n    this.sectionLanding.appendChild(itemLi);\r\n  }\r\n\r\n  init() {\r\n    this.buildLanding();\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://dream-movies/./assets/js/modules/create-landing.js?");

/***/ }),

/***/ "./assets/js/modules/debounce.js":
/*!***************************************!*\
  !*** ./assets/js/modules/debounce.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ debounce)\n/* harmony export */ });\nfunction debounce(callback, delay) {\r\n  let timer;\r\n\r\n  return (...args) => {\r\n    if (timer) {\r\n      clearTimeout(timer);\r\n    }\r\n\r\n    timer = setTimeout(() => {\r\n      callback(...args);\r\n      timer = null;\r\n    }, delay);\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://dream-movies/./assets/js/modules/debounce.js?");

/***/ }),

/***/ "./assets/js/modules/expand-search.js":
/*!********************************************!*\
  !*** ./assets/js/modules/expand-search.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ExpandSearch)\n/* harmony export */ });\n/* harmony import */ var _outside_click_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outside-click.js */ \"./assets/js/modules/outside-click.js\");\n\r\n\r\nclass ExpandSearch {\r\n  constructor(\r\n    containerSearch,\r\n    searchInput,\r\n    landingContainer,\r\n    mainContainerContent,\r\n    mainContainerSearch\r\n  ) {\r\n    this.containerSearch = document.querySelector(containerSearch);\r\n    this.searchInput = document.querySelector(searchInput);\r\n    this.landingContainer = document.querySelector(landingContainer);\r\n    this.mainContainerContent = document.querySelector(mainContainerContent);\r\n    this.mainContainerSearch = document.querySelector(mainContainerSearch);\r\n\r\n    this.events = [\"touchstart\", \"click\"];\r\n    this.activeClass = \"active\";\r\n\r\n    this.handleExpandSearch = this.handleExpandSearch.bind(this);\r\n  }\r\n\r\n  handleExpandSearch() {\r\n    // Adiciona a classe active para mostrar\r\n    //  o mainContainerSearch e o containerSearch\r\n    this.containerSearch.classList.add(this.activeClass);\r\n    this.mainContainerSearch.classList.add(this.activeClass);\r\n\r\n    // E retira classe para desaparecer o\r\n    // mainContainerContent e o landingContainer\r\n    this.mainContainerContent.classList.remove(this.activeClass);\r\n    this.landingContainer.classList.remove(this.activeClass);\r\n\r\n    const outsideClick = new _outside_click_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\r\n      this.containerSearch,\r\n      this.events,\r\n      () => {\r\n        this.containerSearch.classList.remove(this.activeClass);\r\n        if (this.searchInput.value === \"\") {\r\n          this.mainContainerSearch.classList.remove(this.activeClass);\r\n          this.landingContainer.classList.add(this.activeClass);\r\n          this.mainContainerContent.classList.add(this.activeClass);\r\n        }\r\n      }\r\n    );\r\n    outsideClick.init();\r\n  }\r\n\r\n  init() {\r\n    this.containerSearch.addEventListener(\"click\", this.handleExpandSearch);\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://dream-movies/./assets/js/modules/expand-search.js?");

/***/ }),

/***/ "./assets/js/modules/handle-search.js":
/*!********************************************!*\
  !*** ./assets/js/modules/handle-search.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HandleSearch)\n/* harmony export */ });\n/* harmony import */ var _build_section_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./build-section.js */ \"./assets/js/modules/build-section.js\");\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debounce.js */ \"./assets/js/modules/debounce.js\");\n\r\n\r\n\r\nclass HandleSearch {\r\n  constructor(\r\n    idSection,\r\n    searchInput,\r\n    sectionTitle,\r\n    movieList,\r\n    baseUrl,\r\n    apiKey\r\n  ) {\r\n    this.idSection = idSection;\r\n    this.searchInput = document.querySelector(searchInput);\r\n    this.sectionTitle = document.querySelector(sectionTitle);\r\n    this.movieList = document.querySelector(movieList);\r\n    this.baseUrl = baseUrl;\r\n    this.apiKey = apiKey;\r\n\r\n    // Faz o debounce para o evento\r\n    // não ativar tantas vezes\r\n    this.fetchSearch = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this.fetchSearch.bind(this), 200);\r\n  }\r\n\r\n  async fetchSearch() {\r\n    const search = this.searchInput.value;\r\n\r\n    const jsonMidia = await (\r\n      await fetch(\r\n        `${this.baseUrl}/search/movie?api_key=${this.apiKey}&language=en&region=BR&query=${search}&include_adult=false`\r\n      )\r\n    ).json();\r\n\r\n    // Verifica se a lista de filmes tem tamanho\r\n    // então remove todos os filmes da lista\r\n    if (this.movieList.children.length) {\r\n      const arrayChildren = [...this.movieList.children];\r\n      this.sectionTitle.innerText = \"Search by movies\";\r\n\r\n      arrayChildren.forEach((item) => {\r\n        this.movieList.removeChild(item);\r\n      });\r\n    }\r\n\r\n    jsonMidia.results.forEach((item) => {\r\n      if (item.backdrop_path) {\r\n        const objMidiaInfo = {\r\n          rate: item.vote_average.toFixed(1),\r\n          popularity: item.popularity,\r\n          year: item.release_date.slice(0, 4),\r\n          backdrop: item.backdrop_path,\r\n          image: item.poster_path,\r\n          id: item.id,\r\n          type: \"movie\",\r\n          title: item.title,\r\n        };\r\n\r\n        const buildSection = new _build_section_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.idSection, objMidiaInfo);\r\n        buildSection.init();\r\n      }\r\n    });\r\n  }\r\n\r\n  addEventSearch() {\r\n    this.searchInput.addEventListener(\"keyup\", this.fetchSearch);\r\n  }\r\n\r\n  init() {\r\n    this.addEventSearch();\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://dream-movies/./assets/js/modules/handle-search.js?");

/***/ }),

/***/ "./assets/js/modules/menu-mobile.js":
/*!******************************************!*\
  !*** ./assets/js/modules/menu-mobile.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outside_click_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outside-click.js */ \"./assets/js/modules/outside-click.js\");\n\r\n\r\nclass MenuMobile {\r\n  constructor(btnMenu, containerMenu) {\r\n    this.btnMenu = document.querySelector(btnMenu);\r\n    this.containerMenu = document.querySelector(containerMenu);\r\n    this.events = [\"touchstart\", \"click\"];\r\n    this.activeClass = \"active\";\r\n\r\n    this.openMenu = this.openMenu.bind(this);\r\n  }\r\n\r\n  openMenu() {\r\n    this.btnMenu.classList.add(this.activeClass);\r\n    this.containerMenu.classList.add(this.activeClass);\r\n\r\n    const outsideClick = new _outside_click_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\r\n      this.containerMenu,\r\n      this.events,\r\n      () => {\r\n        this.btnMenu.classList.remove(this.activeClass);\r\n        this.containerMenu.classList.remove(this.activeClass);\r\n      }\r\n    );\r\n    outsideClick.init();\r\n  }\r\n\r\n  init() {\r\n    this.btnMenu.addEventListener(\"click\", this.openMenu);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://dream-movies/./assets/js/modules/menu-mobile.js?");

/***/ }),

/***/ "./assets/js/modules/outside-click.js":
/*!********************************************!*\
  !*** ./assets/js/modules/outside-click.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ OutsideClick)\n/* harmony export */ });\nclass OutsideClick {\r\n  constructor(element, events, callback) {\r\n    this.element = element;\r\n    this.events = events;\r\n    this.callback = callback;\r\n    this.html = document.documentElement;\r\n    this.outside = \"data-outside\";\r\n\r\n    this.handleOutsideClick = this.handleOutsideClick.bind(this);\r\n  }\r\n\r\n  handleOutsideClick({ target }) {\r\n    if (!this.element.contains(target)) {\r\n      this.element.removeAttribute(this.outside);\r\n      this.events.forEach((userEvents) => {\r\n        this.html.removeEventListener(userEvents, this.handleOutsideClick);\r\n      });\r\n      this.callback();\r\n    }\r\n  }\r\n\r\n  addEventsOutsideClick() {\r\n    this.events.forEach((userEvents) => {\r\n      setTimeout(() => {\r\n        this.html.addEventListener(userEvents, this.handleOutsideClick);\r\n      });\r\n\r\n      this.element.setAttribute(this.outside, \"\");\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (!this.element.hasAttribute(this.outside)) {\r\n      this.addEventsOutsideClick();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://dream-movies/./assets/js/modules/outside-click.js?");

/***/ }),

/***/ "./assets/js/modules/return-movie.js":
/*!*******************************************!*\
  !*** ./assets/js/modules/return-movie.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ returnMovie)\n/* harmony export */ });\n/* harmony import */ var _build_midia_info_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./build-midia-info.js */ \"./assets/js/modules/build-midia-info.js\");\n\r\n\r\nfunction returnMovie(link) {\r\n  async function getDataMidia(id, type) {\r\n    const jsonMidia = await (\r\n      await fetch(\r\n        `https://api.themoviedb.org/3/${type}/${id}?api_key=25ea17bf3ab54060fea05921b6061c3c&language=pt-BR&region=BR`\r\n      )\r\n    ).json();\r\n\r\n    const objMidiaInfo = {\r\n      rate: jsonMidia.vote_average.toFixed(1),\r\n      year: jsonMidia.release_date\r\n        ? jsonMidia.release_date.slice(0, 4)\r\n        : jsonMidia.first_air_date.slice(0, 4),\r\n      backdrop: jsonMidia.backdrop_path,\r\n      type,\r\n      title: jsonMidia.title ? jsonMidia.title : jsonMidia.name,\r\n      genres: jsonMidia.genres,\r\n      time:\r\n        type === \"movie\"\r\n          ? `${jsonMidia.runtime}min`\r\n          : `${jsonMidia.number_of_seasons} season(s)`,\r\n      id,\r\n      overview: jsonMidia.overview,\r\n    };\r\n\r\n    (0,_build_midia_info_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(objMidiaInfo);\r\n  }\r\n\r\n  function getMovie(event) {\r\n    event.preventDefault();\r\n\r\n    window.scrollTo({\r\n      top: 0,\r\n      behavior: \"smooth\",\r\n    });\r\n\r\n    const { target } = event;\r\n\r\n    const midiaId = target.dataset.id;\r\n    const midiaType = target.dataset.type;\r\n\r\n    getDataMidia(midiaId, midiaType);\r\n  }\r\n\r\n  link.addEventListener(\"click\", getMovie);\r\n}\r\n\n\n//# sourceURL=webpack://dream-movies/./assets/js/modules/return-movie.js?");

/***/ }),

/***/ "./assets/js/modules/set-fetch.js":
/*!****************************************!*\
  !*** ./assets/js/modules/set-fetch.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SetFetch)\n/* harmony export */ });\n/* harmony import */ var _build_section_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./build-section.js */ \"./assets/js/modules/build-section.js\");\n\r\n\r\nclass SetFetch {\r\n  constructor(baseUrl, apiKey, imageUrl, category, idSection, typeMidiaFetch) {\r\n    this.baseUrl = baseUrl;\r\n    this.apiKey = apiKey;\r\n    this.category = category;\r\n    this.imageUrl = imageUrl;\r\n    this.idSection = idSection;\r\n    this.typeMidiaFetch = typeMidiaFetch;\r\n  }\r\n\r\n  getDataMidia(midia) {\r\n    return {\r\n      rate: midia.vote_average.toFixed(1),\r\n      popularity: midia.popularity,\r\n      year: midia.release_date\r\n        ? midia.release_date.slice(0, 4)\r\n        : midia.first_air_date.slice(0, 4),\r\n      image: `${this.imageUrl}${midia.poster_path}`,\r\n      backdrop: `${this.imageUrl}${midia.backdrop_path}`,\r\n      id: midia.id,\r\n      type: this.typeMidiaFetch,\r\n      title: midia.title ? midia.title : midia.name,\r\n    };\r\n  }\r\n\r\n  async startFetch() {\r\n    const midiaJson = await (\r\n      await fetch(\r\n        `${this.baseUrl}/${this.typeMidiaFetch}/${this.category}?api_key=${this.apiKey}&page=1&language=pt-BR&region=BR`\r\n      )\r\n    ).json();\r\n\r\n    midiaJson.results.forEach((midia) => {\r\n      // ativa a função getDataMidia pra receber\r\n      // o objeto com os dados escolhidos\r\n      const obj = this.getDataMidia(midia);\r\n\r\n      const buildSection = new _build_section_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.idSection, obj);\r\n      buildSection.init();\r\n    });\r\n  }\r\n\r\n  init() {\r\n    this.startFetch();\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://dream-movies/./assets/js/modules/set-fetch.js?");

/***/ }),

/***/ "./assets/js/script.js":
/*!*****************************!*\
  !*** ./assets/js/script.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_set_fetch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/set-fetch.js */ \"./assets/js/modules/set-fetch.js\");\n/* harmony import */ var _modules_create_landing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/create-landing.js */ \"./assets/js/modules/create-landing.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./assets/js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_expand_search_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/expand-search.js */ \"./assets/js/modules/expand-search.js\");\n/* harmony import */ var _modules_handle_search_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/handle-search.js */ \"./assets/js/modules/handle-search.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst baseUrl = \"https://api.themoviedb.org/3\";\r\nconst apiKey = \"25ea17bf3ab54060fea05921b6061c3c\";\r\nconst imageUrl = \"https://image.tmdb.org/t/p/w780\";\r\n\r\nconst fetchMoviesPopular = new _modules_set_fetch_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\r\n  baseUrl,\r\n  apiKey,\r\n  imageUrl,\r\n  \"popular\",\r\n  \"#movie-popular\",\r\n  \"movie\"\r\n);\r\nfetchMoviesPopular.init();\r\n\r\nconst fetchMoviesTopRated = new _modules_set_fetch_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\r\n  baseUrl,\r\n  apiKey,\r\n  imageUrl,\r\n  \"top_rated\",\r\n  \"#movie-top-rated\",\r\n  \"movie\"\r\n);\r\nfetchMoviesTopRated.init();\r\n\r\nconst fetchTvPopular = new _modules_set_fetch_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\r\n  baseUrl,\r\n  apiKey,\r\n  imageUrl,\r\n  \"popular\",\r\n  \"#serie-popular\",\r\n  \"tv\"\r\n);\r\nfetchTvPopular.init();\r\n\r\nconst fetchTvTopRated = new _modules_set_fetch_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\r\n  baseUrl,\r\n  apiKey,\r\n  imageUrl,\r\n  \"top_rated\",\r\n  \"#serie-top-rated\",\r\n  \"tv\"\r\n);\r\nfetchTvTopRated.init();\r\n\r\nconst createLanding = new _modules_create_landing_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\r\n  baseUrl,\r\n  apiKey,\r\n  imageUrl,\r\n  \".landing-container .landing-list\"\r\n);\r\ncreateLanding.init();\r\n\r\nconst menuMobile = new _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\r\n  '[data-menu=\"button\"]',\r\n  '[data-menu=\"container\"]'\r\n);\r\nmenuMobile.init();\r\n\r\nconst expandSearch = new _modules_expand_search_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\r\n  '[data-search=\"container\"]',\r\n  '[data-search=\"container\"] input',\r\n  \".landing-container\",\r\n  \"#main-content-container\",\r\n  \"#main-search-container\"\r\n);\r\nexpandSearch.init();\r\n\r\nconst handleSearch = new _modules_handle_search_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\r\n  \"#main-search-container\",\r\n  '[data-search=\"container\"] input',\r\n  \"#main-search-container .section-title\",\r\n  \"#main-search-container .movie-list\",\r\n  baseUrl,\r\n  apiKey\r\n);\r\nhandleSearch.init();\r\n\n\n//# sourceURL=webpack://dream-movies/./assets/js/script.js?");

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