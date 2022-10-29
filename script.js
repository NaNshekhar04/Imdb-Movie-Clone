const URL = "https://www.omdbapi.com/?apikey=91d29197";

const searchBar = document.getElementById("searchBar");
const searchDownbar = document.getElementById("searchList");


function inputHandle(e) {
    let result = e.target.value;
    handleMovies(result);
}

function handleFavourite(e, detail) {
    e.preventDefault();
    searchDownbar.innerHTML = "";
    let favMoviesInfo = [];
    let tempData = JSON.parse(localStorage.getItem("MovieInfo"));
    if (tempData) {
        favMoviesInfo.unshift(tempData);
        favMoviesInfo.unshift(detail);
        localStorage.setItem("MovieInfo", JSON.stringify(favMoviesInfo));
    } else {
        localStorage.setItem("MovieInfo", JSON.stringify(detail));
    }
}

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


            document.getElementById("favbtn").addEventListener("click", (e) => handleFavourite(e, detail));

            function showInfo() {
                localStorage.setItem("MovieInfo", JSON.stringify(detail));
                parent.location = "./HTML/movieInfo.html";
            }

            document.getElementById("info").addEventListener("click", showInfo);


        }
    }
}

searchBar.addEventListener("input", inputHandle);
