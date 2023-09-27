import { MoviePageDiv,MoviePageDivImg,MoviePageImg,MovieTitle,MovieSinopse,MovieSinopseText, MovieGenres } from "./styled.ts";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import getMovie from "../../services/getMovie";
import { Movie } from "../../@types/Movie";
import Loader from "../../components/Loader/index.tsx";
const API_KEY = import.meta.env.VITE_API_KEY;
const VITE_IMG = import.meta.env.VITE_IMG;


export default function Details() {
  const {id} = useParams();
  const[movie, setMovie] = useState<Movie>();
  const [loading, setLoading] = useState(true);

  async function fetchMovie(movie_id: string) {
    try {
      const local_id = parseInt(movie_id);
      const { data } = await getMovie(`/3/movie/${local_id}?api_key=${API_KEY}`);
      const { id, adult, genres, original_title, overview, poster_path, tagline, runtime } = data;
      setMovie({id, adult, genres, original_title, overview, poster_path, tagline, runtime});
      setLoading(false);
    } catch(e){
      console.log(e);
    }
  }

  const concatGenres = (genres:any) => {
    let concat =''
    for(let i in genres){
      Number(i) < genres.length-1 ? concat += genres[i].name +", " : concat += genres[i].name
    }
    return concat
  }

  console.log(id);
  useEffect(() => {
    if (typeof id === 'string') {
      if (!movie) fetchMovie(id);
    } else {
      console.error('ID não encontrado na URL');
    }
  }, [movie]);

  return (
    <div>
     {loading ? (
        <Loader />
      ) : movie && ( 
      <>
      <MoviePageDiv>
        <MovieTitle>{movie?.original_title}</MovieTitle>
        <MoviePageDivImg>
          <MoviePageImg src={`${VITE_IMG}/${movie?.poster_path}`} /> 
        </MoviePageDivImg>
        <MovieGenres>
          Gênero: {`${concatGenres(movie?.genres)}`}
        </MovieGenres>
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
