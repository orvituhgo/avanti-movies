import api from "./api";

export default async function getMovies() {
  const movies = await api.get("/3/movie/popular");
  return movies;
}
