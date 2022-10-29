const Favslist = document.getElementById("Favs_list");

var favouriteMovies = [];

function handleRemoveMovie(index) {
  let data = JSON.parse(localStorage.getItem("MovieInfo"));
  data.splice(index, 1);
  localStorage.setItem("MovieInfo", JSON.stringify(data));
  window.location.reload();
}

function showDetails(index) {
  let element = favouriteMovies[index];
  localStorage.setItem("MovieInfo", JSON.stringify(element));
  parent.location = "../HTML/movieInfo.html";
}

function handleFavourites() {
  favouriteMovies = JSON.parse(localStorage.getItem("MovieInfo"));
  Array.from(favouriteMovies).forEach((element, index) => {
    Favslist.innerHTML += `
      <li>
        <div>
          <div>
            <img class='poster' src=${element.Poster}></img>
          </div>
          <div>
            <div class="card-body">
              <div id="header_container">
              <h2 class="card-title" >${element.Title}</h2>
            </div>
              <p class="card-text"><b>Actors :</b> ${element.Actors}</p>
              <p class="card-text"><b>Year :</b> ${element.Year}</p>
              <p class="card-text"><b>IMDB Rating :</b> ${element.imdbRating}</p>
            </div>
            <div class="card-body" id="remove_btn">
              <button class="btn btn-primary" id='delete_movie' onclick="handleRemoveMovie(${index})">REMOVE🗑️</button>
              <button id="info_btn" class="btn btn-info" onclick="showDetails(${index})">INFO📄</button>
            </div>
          </div>
        </div>
      </li>
      `;
  });
}

handleFavourites();
