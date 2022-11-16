import { Movie } from "./models/Movie";
import { getMoviesFromApi } from "./services/movieService";

const searchInput = document.getElementById("searchBar") as HTMLInputElement;
const searchButton = document.getElementById(
  "searchButton"
) as HTMLButtonElement;

searchButton.addEventListener("click", async () => {
  console.log(searchInput.value);

  const movies = await getMoviesFromApi(searchInput.value);
  renderMovieList(movies);
});

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
