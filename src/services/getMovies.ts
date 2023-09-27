import api from "./api";

export default async () => await api.get("/3/movie/popular");
