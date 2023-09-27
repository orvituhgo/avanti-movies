import api from "./api";

export default async function getMovies() {
  const movies = await api.get(
    "/3/movie/changes?api_key=6aef3d4645903277e4db85f88cde9da3"
  );
  return movies;
}
