import axios from "axios";
import { IOmdbResponse } from "../models/IOmdbResponse";
import { Movie } from "../models/Movie";

export async function getMoviesFromApi(searchWord: string): Promise<Movie[]> {
  console.log(searchWord);

  const response = await axios.get<IOmdbResponse>(
    `http://www.omdbapi.com/?apikey=2c9c9c55&s=${searchWord}`
  );

  console.log(response.data.Search);

  return response.data.Search;
}
