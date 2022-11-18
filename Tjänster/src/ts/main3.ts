import axios from "axios";

let searchInput = document.getElementById("searchInput") as HTMLInputElement;
let bestSearchButton = document.getElementById(
  "bestSearchButton"
) as HTMLButtonElement;
let movieWrapper = document.getElementById("movieWrapper") as HTMLDivElement;

bestSearchButton.addEventListener("click", () => {
  console.log(searchInput.value);
  searchBestMovies(searchInput.value);
  searchInput.value = "";
});

function searchBestMovies(mySearchWord: string) {
  console.log(mySearchWord);

  axios
    .get(`http://www.omdbapi.com/?apikey=2c9c9c55&s=${mySearchWord}`)
    .then((response) => {
      console.log(response.data);

      movieWrapper.innerHTML = "";

      for (let i: number = 0; i < response.data.Search.length; i++) {
        console.log(response.data.Search[i].Title);

        let wrapper: HTMLDivElement = document.createElement("div");
        let Title: HTMLHeadingElement = document.createElement("h3");
        let Poster: HTMLImageElement = document.createElement("img");

        Title.innerHTML = response.data.Search[i].Title;
        Poster.src = response.data.Search[i].Poster;

        wrapper.appendChild(Title);
        wrapper.appendChild(Poster);
        movieWrapper.appendChild(wrapper);
        document.body.appendChild(movieWrapper);
      }
    });
}
