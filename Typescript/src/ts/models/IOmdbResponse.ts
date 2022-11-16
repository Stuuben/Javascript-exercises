import { Imovie } from "./Imovie"

export interface IOmdbResponse {
  totalResults:string
  Search: Imovie[]
}