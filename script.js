const URL = "https://www.omdbapi.com/?apikey=91d29197";

const searchBar = document.getElementById("searchBar");
const searchDownbar = document.getElementById("searchList");


function inputHandle(e) {
    let result = e.target.value;
    handleMovies(result);
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
            `
        }
    }
}

searchBar.addEventListener("input", inputHandle);
