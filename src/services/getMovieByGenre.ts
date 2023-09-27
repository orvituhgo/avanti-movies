import api from "./api";

// export default (with_genres: string) =>
//   api.get("/3/discover/movie", {
//     params: {
//       include_adult: "false",
//       include_video: "false",
//       language: "en-US",
//       page: "1",
//       sort_by: "popularity.desc",
//       with_genres,
//     },
//   });

export default (with_genres: string) =>
  api.get(`/3/discover/movie?query=${with_genres}`);
