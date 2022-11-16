import { Movie } from "./Movie";

export interface IOmdbResponse {
  totalResults: string;
  Search: Movie[];
}
