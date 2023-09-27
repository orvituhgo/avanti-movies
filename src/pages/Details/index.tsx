import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import getMovie from "../../services/getMovie";
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;
const IMG = import.meta.env.VITE_IMG

export default function Details() {
  const[movie, setMovie] = useState();
  const [loading, setLoading] = useState(true);
  const genres = []
  const { id } = useParams();

  async function fetchMovie(url:string) {
    try {
      const { data } = await getMovie(url);
      setMovie(data);

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

  useEffect(() => {
    const movieURL = `${BASE_URL}/3/movie/${id}?api_key=${API_KEY}`;
    fetchMovie(movieURL);

  }, []);

  return (
    <div>
      <div>
      <img src={IMG+movie?.poster_path}/>

      </div>

      <div> 
        <h1>{movie && <>{movie.title}</>}</h1>
      </div>

      <div> 
        <h2>{movie && <>Nota: {movie.vote_average}</>}</h2>
        <h2>{movie && <>N° votos: {movie.vote_count}</>}</h2>
      </div>

      <div>
        <h2>Sinopse</h2> 
        {movie && <h4>{movie.overview}</h4>}
        {movie && <h4>{console.log(movie)}</h4>}
      </div>
      
      <div>
        <h2>Gêneros: {movie && <>{concatGenres(movie.genres)}</>}</h2> 
      </div>




    </div>
    
  );
}
