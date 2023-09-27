import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer 6aef3d4645903277e4db85f88cde9da3`,
  },
  timeout: 1000,
});
