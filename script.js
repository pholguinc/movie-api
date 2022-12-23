//TMDB

const API_KEY = "api_key=b5cc7173b73d4daa22dd2f7b612a36bf";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500";


const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
const tagsEl = document.getElementById("tags");

const prev = document.getElementById("prev");
const next = document.getElementById("next");
const current = document.getElementById("current");

getMovies(API_URL);

function getMovies(url) {
  lastUrl = url;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results);
      showMovies(data.results);
    });
}

function showMovies(data) {
  main.innerHTML = "";

  data.forEach((movie) => {
    const { title, poster_path, overview, id, release_date } = movie;
    const movieEl = document.createElement("div");
    main.classList.add("row");
    movieEl.classList.add(
      "movie",
      "col",
      "col-12",
      "col-sm-12",
      "col-md-6",
      "col-lg-4",
      "col-xl-4",
      "mb-4"
    );
    movieEl.innerHTML = `
    <div class="card">
    <a href="https://kawaiiotome.com.br/noticia/404">
    <img class="img-fluid" src="${poster_path? IMG_URL+poster_path: "http://via.placeholder.com/1080x1580" }" alt="${title}">
    </a>
    <div class="card-body">
    <h5 class="card-title"><a href="https://kawaiiotome.com.br/noticia/404">${title}</a></h5>
    <h6 class="card-subtitle text-muted">${overview}</h6>
    </div>
    <div class="card-footer text-muted">
    <div class="d-flex justify-content-between"">
    ${release_date}
  <button class="btn btn-primary float-right" id="${id}">Película</button>
</div>
    </div>
    </div>
                 
        `;

    main.appendChild(movieEl);

    document.getElementById(id).addEventListener("click", () => {
      console.log(id);
      openNav(movie);
    });
  });
}