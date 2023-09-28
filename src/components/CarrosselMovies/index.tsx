import { useState, useEffect, useContext } from "react";

import { Container, Card } from "./styles";
import { Movies } from "../../@types/Movies";

import { FavoritesContext } from "../../context/FavoritesProvider.tsx";
import getMovies from "../../services/getMovies";
import getMovieByGenre from "../../services/getMovieByGenre";
import PlusBtn from "../../components/PlusBtn/index.tsx";
import Loader from "../Loader";

const VITE_IMG = import.meta.env.VITE_IMG;

type Props = {
  activeGenre: string;
};

export default function CarrosselMovies({ activeGenre }: Props) {
  const [movies, setMovies] = useState<Movies>();
  const [loading, setLoading] = useState(true);

  const { addFavorite } = useContext(FavoritesContext);

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
    async function fetchMoviesByGenre() {
      try {
        setLoading(true);
        const { data } = await getMovieByGenre(activeGenre);
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
          <div>
            <Card to={`/details/${movie.id}`} key={movie.id}>
              <img
                src={`${VITE_IMG}${movie?.poster_path}`}
                alt={movie?.poster_path}
              />
              <div>
                <h2>{movie.original_title}</h2>
                <p>{movie.original_title}</p>
              </div>
            </Card>
            <PlusBtn
              size={20}
              onClickCustom={() =>
                addFavorite({ title: movie?.original_title, id: movie?.id })
              }
            />
          </div>
        ))
      ) : (
        <h1>Nada encontrado</h1>
      )}
    </Container>
  );
}
