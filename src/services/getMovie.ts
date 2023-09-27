import api from "./api";

export default async function getMovie(url: string) {
  const response = await api.get(url);
  return response;
}
