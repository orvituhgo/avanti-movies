import api from "./api";

export default async function getGenres() {
  const response = await api.get("/3/genre/movie/list");
  return response;
}
