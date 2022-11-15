
import { IMovie } from "./models/Imovie";
import { searchMovies } from "./services/movieServices";


(document.getElementById("searchForm") as HTMLFormElement).addEventListener(
    "submit",
    async (event: SubmitEvent) => {
      event.preventDefault();
  
      let searchText: string = (
        document.getElementById("searchText") as HTMLInputElement
      ).value;
  
      let movies: IMovie[] = await searchMovies(searchText);
      createHtml(movies);
    }
  );
  const createHtml = (movies: IMovie[]) => {
    let container: HTMLDivElement = document.getElementById(
      "searchResult"
    ) as HTMLDivElement;
    container.innerHTML = "";
    for (let i = 0; i < movies.length; i++) {
      let title = document.createElement("h3");
  
      title.innerHTML = movies[i].Title;
  
      container.appendChild(title);
    }
  };
  
  //
/* function handleData(data) {
  for (let i = 0; i < data.Search.length; i++) {
    console.log(data.Search[i]);

    let wrapper = document.createElement("div");
    let title = document.createElement("h3");
    let img = document.createElement("img");
    let year = document.createElement("p");

    title.innerHTML = data.Search[i].Title;
    img.src = data.Search[i].Poster;
    year.innerHTML = data.Search[i].Year;

    wrapper.classList.add("movie");
    wrapper.appendChild(title);
    wrapper.appendChild(img);
    wrapper.appendChild(year);

    document.body.appendChild(wrapper);
  }
}
 */