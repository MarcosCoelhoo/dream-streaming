(()=>{"use strict";function e(e){e.addEventListener("click",(function(e){e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"});const{target:i}=e;!async function(e,i){const a=await(await fetch(`https://api.themoviedb.org/3/${i}/${e}?api_key=25ea17bf3ab54060fea05921b6061c3c&language=pt-BR&region=BR`)).json();var n;n={rate:a.vote_average.toFixed(1),year:a.release_date?a.release_date.slice(0,4):a.first_air_date.slice(0,4),backdrop:a.backdrop_path,type:i,title:a.title?a.title:a.name,genres:a.genres,time:"movie"===i?`${a.runtime}min`:`${a.number_of_seasons} season(s)`,id:e,overview:a.overview},function(){const{rate:e,year:i,backdrop:a,type:s,title:c,genres:o,time:r,id:d,overview:l}=n,m=document.querySelector(".section-midia .section-content");if(a){m.innerHTML=`\n      <div class="midia-image">\n      <div class="filter-image"></div>\n      <img src="https://image.tmdb.org/t/p/w780${a}" alt="">\n    </div>\n    <div class="midia-info">\n      <div class="midia-data">\n        <p class="data year">${i}</p>\n        <p class="data time">${r}</p>\n        <div class="rate data year">\n          <p>${e}</p>\n          <img src="./assets/icons/star.svg" alt="icon star rate" width="13px" height="13px">\n        </div>\n      </div>\n    \n      <h1 class="midia-title">${c}</h1>\n    \n      <ul class="midia-genres">\n           \n      </ul>\n    \n      <div class="midia-description">\n        <h2 class="section-title">Description</h2>\n    \n        <p class="description-text">${l}</p>\n      </div>\n    </div>\n      `;const n=document.querySelector(".section-midia .midia-genres");o.forEach((e=>{const t=document.createElement("li");t.innerHTML=`<p>${e.name}</p>`,n.appendChild(t)})),document.querySelector(".section-midia").classList.add("active"),document.title=`Dream | ${c}`,async function(e,i){const a=document.querySelector("#section-midia-similar .movie-list");a.children.length&&Array.from(a.children).forEach((e=>{a.removeChild(e)})),(await(await fetch(`https://api.themoviedb.org/3/${e}/${i}/similar?api_key=25ea17bf3ab54060fea05921b6061c3c&language=en&region=BR`)).json()).results.forEach((a=>{const n={rate:a.vote_average.toFixed(1),year:a.release_date?a.release_date.slice(0,4):a.first_air_date.slice(0,4),popularity:a.popularity,image:a.poster_path,type:e,id:i,title:"movie"===e?a.title:a.name};t("#section-midia-similar",n)}))}(s,d)}}(),document.querySelector(".back").addEventListener("click",(e=>{e.preventDefault();const t=document.querySelector(".section-midia");document.title="Dream",t.classList.remove("active")}))}(i.dataset.id,i.dataset.type)}))}class t{constructor(e,t){this.objMidiaInfo=t,this.idSection=e,this.parentMidiaList=document.querySelector(`${e} .movie-list`)}buildSection(){const{rate:t,popularity:i,year:a,image:n,id:s,type:c,title:o}=this.objMidiaInfo,r=o.replace(/[\s\W]+/g,"-").toLowerCase();if(n){const o=document.createElement("li");o.innerHTML=`\n    <a href='${r}.html' data-id='${s}' data-type='${c}'>\n  <div class="popular-image movie-image">\n  <img src="https://image.tmdb.org/t/p/w780${n}" alt="">\n</div>\n<div class="movie-content">\n  <div class="movie-rate">\n    <div class="rate">\n      ${t}\n      <img src="./assets/icons/star.svg" alt="icon star rate" width="13px" height="13px">\n    </div>\n  </div>\n\n  <div class="movie-info">\n    <div class="info-year">\n      ${a}\n    </div>\n    <div class="info-views">\n      <img src="./assets/icons/eye.svg" alt="" width="16px" height="16px">\n      <p>${i}</p>\n    </div>\n  </div>\n</div>\n</a>\n  `,this.parentMidiaList.appendChild(o),e(o.querySelector("a"))}}init(){return this.buildSection(),function(e){const t=document.querySelectorAll(`${e} [data-control]`),i=document.querySelectorAll(`${e} .movie-list li`),a=i.length;let n=0;function s({target:e}){"left"===e.dataset.control?n-=2:n+=2,n>=a&&(n=0),n<0&&(n=a-1),i.forEach((e=>e.classList.remove(".active"))),i[n].scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"}),i[n].classList.add("active")}i[n].classList.add("active"),t.forEach((e=>{e.addEventListener("click",s)}))}(this.idSection),this}}class i{constructor(e,t,i,a,n,s){this.baseUrl=e,this.apiKey=t,this.category=a,this.imageUrl=i,this.idSection=n,this.typeMidiaFetch=s}getDataMidia(e){return{rate:e.vote_average.toFixed(1),popularity:e.popularity,year:e.release_date?e.release_date.slice(0,4):e.first_air_date.slice(0,4),image:`${this.imageUrl}${e.poster_path}`,backdrop:`${this.imageUrl}${e.backdrop_path}`,id:e.id,type:this.typeMidiaFetch,title:e.title?e.title:e.name}}async startFetch(){(await(await fetch(`${this.baseUrl}/${this.typeMidiaFetch}/${this.category}?api_key=${this.apiKey}&page=1&language=pt-BR&region=BR`)).json()).results.forEach((e=>{const i=this.getDataMidia(e);new t(this.idSection,i).init()}))}init(){return this.startFetch(),this}}function a(e,t,i){const a=document.documentElement,n="data-outside";function s({target:c}){e.contains(c)||(e.removeAttribute(n),t.forEach((e=>{a.removeEventListener(e,s)})),i())}e.hasAttribute(n)||t.forEach((t=>{setTimeout((()=>{a.addEventListener(t,s)})),e.setAttribute(n,"")}))}const n="https://api.themoviedb.org/3",s="25ea17bf3ab54060fea05921b6061c3c",c="https://image.tmdb.org/t/p/w780";new i(n,s,c,"popular","#movie-popular","movie").init(),new i(n,s,c,"top_rated","#movie-top-rated","movie").init(),new i(n,s,c,"popular","#serie-popular","tv").init(),new i(n,s,c,"top_rated","#serie-top-rated","tv").init(),function(){const e=document.querySelector('[data-menu="button"]'),t=["touchstart","click"];e.addEventListener("click",(function(){const i=document.querySelector('[data-menu="container"]');e.classList.add("active"),i.classList.add("active"),a(i,t,(()=>{e.classList.remove("active"),i.classList.remove("active")}))}))}(),function(){const e=document.querySelector('[data-search="container"]'),t=document.querySelector('[data-search="container"] input'),i=document.querySelector(".landing-container"),n=document.querySelector("#main-content-container"),s=document.querySelector("#main-search-container"),c=["touchstart","click"];e.addEventListener("click",(function(){e.classList.add("active"),s.classList.add("active"),n.classList.remove("active"),i.classList.remove("active"),a(e,c,(()=>{e.classList.remove("active"),""===t.value&&(s.classList.remove("active"),i.classList.add("active"),n.classList.add("active"))}))}))}(),async function(){const e=document.querySelector(".landing-container .landing-list"),t=+(3*Math.random()+1).toFixed(),i=await(await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=25ea17bf3ab54060fea05921b6061c3c&language=pt-BR&region=BR&page=${t}`)).json(),a=+(Math.random()*i.results.length+1).toFixed(),n=20*(t-1)+a,{vote_average:s,overview:c,release_date:o,backdrop_path:r,title:d}=i.results[a],l=document.createElement("li");l.classList.add("slide-container"),l.innerHTML=`\n    <div class="landing-content">\n            <div class="content-texts">\n            <p class="landing-info">#${n} Popular Movies</p>\n              <h1 class="landing-title">${d}\n              </h1>\n              <p class="landing-description">${c}</p>\n              <footer class="texts-footer">\n                <p class="landing-date" data-landing="date">${o.slice(0,4)}</p>\n                <div class="rate">\n                  ${s.toFixed(1)}\n                  <img src="./assets/icons/star.svg" alt="icon star rate" width="13px" height="13px">\n                </div>\n              </footer>\n\n            </div>\n            <div class="landing-button-container">\n              <a href="#" class="landing-button">\n                watch now\n                <img src="./assets/icons/play.svg" alt="icon play button" ">\n                </a>\n              </div>\n            </div>\n            <div class="landing-image">\n                <img src="https://image.tmdb.org/t/p/w780${r}" alt="image of ${d}">\n            </div>\n  `,e.appendChild(l)}()})();