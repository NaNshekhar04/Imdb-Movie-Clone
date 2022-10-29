const Favslist = document.getElementById("Favs_list")

var favouriteMovies = [];

function handleFavourites() {
    favouriteMovies = JSON.parse(localStorage.getItem("MovieInfo"));
    Array.from(favouriteMovies).forEach((element, index) => {
        Favslist.innerHTML += `
      <li>
        <div>
          <div>
            <img src=${element.Poster}></img>
          </div>
          <div>
            <div class="card-body">
              <div id="header_container">
              <h2 class="card-title" >${element.Title}</h2>
              <button id="info_btn" onclick="openPage(${index})">
            </div>
              <p class="card-text"><b>Actors :</b> ${element.Actors}</p>
              <p class="card-text"><b>Year :</b> ${element.Year}</p>
              <p class="card-text"><b>IMDB Rating :</b> ${element.imdbRating}</p>
            </div>
            <div class="card-body" id="remove_btn">
              <button class="btn btn-primary" id='delete_movie' onclick="handleRemoveMovie(${index})">REMOVE🗑️</button>
              <button id="info" class="btn btn btn-info">INFO📄</button>
            </div>
          </div>
        </div>
      </li>
      `
    }
    )
}


handleFavourites();