
import axios from "axios";
import { IMovie } from "../models/Imovie";
import { IOmdbResponse } from "../models/IOmdbResponse";


export async function searchMovies(searchText: string): Promise<IMovie[]> {
    let response = await axios.get<IOmdbResponse>(
      `http://www.omdbapi.com/?apikey=2c9c9c55&s=batman`
    );
    return response.data.Search;
  }
  