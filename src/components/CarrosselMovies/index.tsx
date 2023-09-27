import { useState, useEffect } from "react";

import { Container, Card } from "./styles";
import { Movies } from "../../@types/Movies";

import getMovies from "../../services/getMovies";
import getMovieByGenre from "../../services/getMovieByGenre";
import Loader from "../Loader";

type Props = {
  activeGenre: string;
};

export default function CarrosselMovies({ activeGenre }: Props) {
  const [movies, setMovies] = useState<Movies>();
  const [loading, setLoading] = useState(true);

  async function fetchMovies() {
    try {
      const { data } = await getMovies();
      setMovies(data.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log(activeGenre);

    async function fetchMoviesByGenre() {
      try {
        setLoading(true);
        const { data } = await getMovieByGenre(activeGenre);
        console.log(data);
        setMovies(data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMoviesByGenre();
  }, [activeGenre]);

  useEffect(() => {
    if (!movies?.length) fetchMovies();
  }, [movies]);

  return (
    <Container>
      {loading ? (
        <Loader size={250} />
      ) : movies?.length ? (
        movies.map((movie) => (
          <Card key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
              alt={movie?.poster_path}
            />
            <div>
              <h2>{movie.original_title}</h2>
              <p>{movie.original_title}</p>
            </div>
          </Card>
        ))
      ) : (
        <h1>Nada encontrado</h1>
      )}
    </Container>
  );
}
