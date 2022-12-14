// FETCHING FAVOURITES LIST ID 

const Favslist = document.getElementById("Favs_list");

// FUNCTION TO HANDLE REMOVING MOVIES FROM FAVOURITES SECTION 

function handleRemoveMovie(index) {
  let data = JSON.parse(localStorage.getItem("MovieInfo"));
  data.splice(index, 1);
  localStorage.setItem("MovieInfo", JSON.stringify(data));
  window.location.reload();
}

// FUNCTION TO SHOW MOVIE DETAILS FROM FAVOURITES SECTION 

function showDetails(index) {
  let favMovieArray = JSON.parse(localStorage.getItem("MovieInfo"));
  let element = favMovieArray[index];
  localStorage.setItem("ShowInfo",JSON.stringify(element));
  // localStorage.setItem("MovieInfo", JSON.stringify(element));
  parent.location = "../HTML/movieInfo.html";
}

// FUNCTION TO SHOW FAVOURITED MOVIE FROM OUR LOCALSTORAGE 


 function handleFavourites() {
  favouriteMovies = JSON.parse(localStorage.getItem("MovieInfo"));
  if(favouriteMovies.length == 0){
    Favslist.innerHTML = "<h3>Uh Oh🧐! No Favourite Movies Added till now....</h3>";
  }
  favouriteMovies.forEach((element, index) => {
    console.log(element);
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
              <button class="btn btn-danger" id='delete_movie' onclick="handleRemoveMovie(${index})">REMOVE🗑️</button>
              <button id="info_btn" class="btn btn-info" onclick="showDetails(${index})">INFO📄</button>
            </div>
          </div>
        </div>
      </li>
      `;
  });
}


handleFavourites();
