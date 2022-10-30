// OMDB API URL WITH KEY 

const URL = "https://www.omdbapi.com/?apikey=91d29197";

// GETTING ELEMENTS BY THEIR IDS 

const searchBar = document.getElementById("searchBar");
const searchDownbar = document.getElementById("searchList");

// FUNCTION TO HANDLE INPUT ON OUR SEARCHBOX 

function inputHandle(e) {
    let result = e.target.value;
    handleMovies(result);
}

// FUNCTION TO ADD MOVIES TO THE FAVOURITES 

function handleFavourite(e, detail) {
    e.preventDefault();
    searchDownbar.innerHTML = "";
    let favMoviesInfo = [];
    let tempData = JSON.parse(localStorage.getItem("MovieInfo"));
    if (tempData) {
        favMoviesInfo.unshift(tempData);
        favMoviesInfo.unshift(detail);
        localStorage.setItem("MovieInfo", JSON.stringify(favMoviesInfo));
        alert('Movie Added SuccessFully 🎉🎉Checkout Favourites !')
        window.location.reload();
    } else {
        localStorage.setItem("MovieInfo", JSON.stringify(detail));
        alert('Something Went Wrong!!')
        window.location.reload();
    }
}

// FUNCTION TO DISPLAY CONTENT ON A MOVIESEARCH 

async function handleMovies(result) {
    searchDownbar.innerHTML = "";
    if (result.length > 2) {
        const res = await fetch(URL + `&t=${result}`);
        let detail = await res.json();
        if (detail.Response === "False") {
            console.log("not found");
            return;
        } else {
            searchDownbar.innerHTML = `
        <div class="poster_container container">
        <img src=${detail.Poster}></img>
        </div>
        <div class="card-body">
            <div id="header_container">
              <h2 class="card-title" >${detail.Title}</h2>
            </div>
            <p class="card-text" ><b>Actors :</b> ${detail.Actors}</p>
            <p class="card-text"><b>Year of Release :</b> ${detail.Year}</p>
            <p class="card-text"><b>IMDB Rating :</b> ${detail.imdbRating}</p>
            <button id="favbtn" class="btn btn btn-danger" type="submit" >
            Add Favourite ❤️
            </button>
            <button id="info" class="btn btn btn-info">INFO📄</button>
            </div>
            `;


            // GETTING THE ID OF THE FAVOURITES BUTTON AND ADDING A HANDLER FUNCTION TO IT  

            document.getElementById("favbtn").addEventListener("click", (e) => handleFavourite(e, detail));


            // FUNCTION TO DISPLAY DETAILED INFORMATION OF A MOVIE ON CLICKING THE INFO BUTTON 

            function showInfo() {
                localStorage.setItem("MovieInfo", JSON.stringify(detail));
                parent.location = "./HTML/movieInfo.html";
            }

            // GETTING THE ID OF THE INFO BUTTON AND ADDING A HANDLER FUNCTION TO IT  

            document.getElementById("info").addEventListener("click", showInfo);


        }
    }
}

searchBar.addEventListener("input", inputHandle);
