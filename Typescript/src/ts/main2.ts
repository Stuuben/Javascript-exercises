import axios from "axios";
import { Imovie } from "./models/Imovie";
import { IOmdbResponse } from "./models/IOmdbResponse";


axios.get<IOmdbResponse>("http://www.omdbapi.com/?apikey=2c9c9c55&s=batman")
  .then((response) => {
console.log(response)

createHTML (response.data);

  });

function createHTML(movies: Imovie[]) => {
  
  let moviesContainer = document.getElementById("moviesContainer") as HTMLDivElement;

  moviesContainer.innerHTML = "";
  
  for (let i = 0; i < data.Search.length; i++) {
    console.log(data.Search[i])

    let contianer:HTMLDivElement = document.createElement("div")
    let Title:HTMLHeadingElement = document.createElement("h3")
    let Poster:HTMLImageElement = document.createElement("img")

    Title.innerHTML = data.Search[i].Title
    Poster.src = data.Search[i].Poster
    Poster.alt = data.Search[i].Title
    

   
  contianer.append(Title, Poster)
    document.body.appendChild(contianer)
    
     
   }
  }

