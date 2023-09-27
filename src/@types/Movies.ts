import { Genres } from "./Genres";

export interface Movie {
  id: number;
  adult: boolean;
  genres: Genres;
  original_title: string;
  overview: string;
  poster_path: string;
  tagline: string;
  runtime: number;
}

export type Movies = Movie[];
