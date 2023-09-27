import { useState, useEffect } from "react";

import { Container } from "./styles";
import { Movies } from "../../@types/Movies";

import getMovies from "../../services/getMovies";
import Loader from "../Loader";

export default function MoviesPage() {
  const [movies, setMovies] = useState<Movies>();
  const [loading, setLoading] = useState(true);

  async function fetchMovies() {
    try {
      const { data } = await getMovies();
      console.log(data);
      setMovies(data.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (!movies?.length) fetchMovies();
  }, [movies]);

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : movies?.length ? (
        movies.map((movie) => <p key={movie.id}>{movie.id}</p>)
      ) : (
        <h1>Nada encontrado</h1>
      )}
    </Container>
  );
}
