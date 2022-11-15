import { IMovie } from "./Imovie";


export interface IOmdbResponse {
    totalResults: string;
    Search: IMovie[];
  }
  