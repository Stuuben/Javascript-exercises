import axios from "axios";

interface Movie {
  Title: string;
  Poster: string;
}

interface IOmdbResponse {
  totalResults: string;
  Search: Movie[];
}

const searchInput = document.getElementById("searchBar") as HTMLInputElement;
const searchButton = document.getElementById(
  "searchButton"
) as HTMLButtonElement;

searchButton.addEventListener("click", () => {
  console.log(searchInput.value);
  searchMovies(searchInput.value);
});

function searchMovies(searchWord: string) {
  console.log(searchWord);

  axios
    .get<IOmdbResponse>(
      `http://www.omdbapi.com/?apikey=2c9c9c55&s=${searchWord}`
    )
    .then((response) => {
      console.log(response.data.Search);

      if (response.data.Search) {
        renderMovieList(response.data.Search);
      } else {
        console.warn("VARNING DU FÅR INGA FILMER");
      }
    });
}

function renderMovieList(movieList: Movie[]) {
  let movieListDiv: HTMLDivElement = document.getElementById(
    "movieList"
  ) as HTMLDivElement;

  movieListDiv.innerHTML = "";

  for (const movie of movieList) {
    console.log(movie.Title);

    let movieDiv: HTMLDivElement = document.createElement("div");
    let Title: HTMLHeadingElement = document.createElement("h3");
    let Poster: HTMLImageElement = document.createElement("img");

    Title.innerHTML = movie.Title;
    Poster.src = movie.Poster;
    Poster.alt = movie.Title;

    movieDiv.append(Title, Poster);
    movieListDiv.append(movieDiv);
  }
}

// 1 våran Sök  vi klickar på sök

// 2 när vi klickar på sök gör ett api anrop med vår sök ord

// 3 ta resulatat fårn api(Filmerna) och rendera i lista
