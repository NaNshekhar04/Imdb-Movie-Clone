const movieDetails = document.getElementById('movie_detail_container');


function displayMovieDetails() {

    let details = JSON.parse(localStorage.getItem("MovieInfo"));
    movieDetails.innerHTML = `  <div class="movie-poster">
    <img src="${(details.Poster != 'N/A') ? details.Poster : "Movie-not-found"}">
</div>
<div class="movie-info">
    <h3 class="movie-title">${details.Title}</h3>
    <ul class="movie-other-info">
      <li class="year">${details.Year}</li> 
       <li class="rated">${details.Rated}</li> 
        <li class="released">${details.Released}</li> 
    </ul>
  <p class="genre-type"> <b>Genre:</b>${details.Genre}</p> 
    <p class="writers"> <b>Writers:</b>${details.Writer}
    </p>
    <p class="actors"> <b>Actors:</b> ${details.Actors}</p>
    <p class="plot"> <b>Plot:</b>${details.Plot}
    </p>
    <p class="Language"> <b>Language:</b>${details.Language}</p>
    <p class="awards"><b><i class="fas-fa-award"></i></b>${details.Awards}</p>
`;
}

displayMovieDetails();
