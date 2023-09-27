import {
  MoviePageDiv,
  MoviePageDivImg,
  MoviePageImg,
  MovieTitle,
  MovieSinopse,
  MovieSinopseText,
} from "./styled.ts";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";

import getMovie from "../../services/getMovie";
import { Movie } from "../../@types/Movie";
const API_KEY = "6aef3d4645903277e4db85f88cde9da3"; //import.meta.env.VITE_API_KEY;

export default function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie>();
  //const [loading, setLoading] = useState(true);

  async function fetchMovie(movie_id: string) {
    try {
      //linha para teste: 17
      const local_id = parseInt(movie_id);
      const { data } = await getMovie(
        `/3/movie/${local_id}?api_key=${API_KEY}`
      );
      const {
        id,
        adult,
        genres,
        original_title,
        overview,
        poster_path,
        tagline,
        runtime,
      } = data;
      setMovie({
        id,
        adult,
        genres,
        original_title,
        overview,
        poster_path,
        tagline,
        runtime,
      });
      //setLoading(false);
    } catch (e) {
      console.log(e);
    }
  }
  console.log(id);
  useEffect(() => {
    if (typeof id === "string") {
      if (!movie) fetchMovie(id);
    } else {
      // Trate o caso em que 'id' é 'undefined' (não encontrado na URL)
      console.error("ID não encontrado na URL");
    }
  }, [movie]);

  return (
    <div>
      {movie && (
        <>
          <MoviePageDiv>
            <MovieTitle>{movie?.original_title}</MovieTitle>
            <MoviePageDivImg>
              <MoviePageImg
                src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
              />
            </MoviePageDivImg>
            <MovieSinopse>
              Sinopse
              <MovieSinopseText>{movie?.overview}</MovieSinopseText>
            </MovieSinopse>
          </MoviePageDiv>
        </>
      )}
    </div>
  );
}
