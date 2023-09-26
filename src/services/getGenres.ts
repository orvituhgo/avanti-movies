import api from "./api";

export default async function getGenres() {
  const response = await api.get(
    "/3/genre/movie/list?api_key=6aef3d4645903277e4db85f88cde9da3"
  );
  console.log("response", response);
  return response;
}
