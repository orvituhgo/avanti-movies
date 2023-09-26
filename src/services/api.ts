import axios from "axios";

const API_KEY = import.meta.env.API_KEY;
const BASE_URL = import.meta.env.BASE_URL;

export default axios.create({
  baseURL: "https://api.themoviedb.org",
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer 6aef3d4645903277e4db85f88cde9da3`,
  },
  timeout: 1000,
});
