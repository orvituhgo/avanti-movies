import api from "./api";

export default async function getMovie(url: string) {
  const response = await api.get(url);
  console.log("response", response);
  return response;
}
