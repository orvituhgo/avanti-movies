import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import getMovie from "../../services/getMovie";
import { Movie } from "../../@types/Movie";
const API_KEY = import.meta.env.VITE_API_KEY;

export default function Details() {
  const[movie, setMovie] = useState<Movie>();
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  async function fetchMovie() {
    try {
      //linha para teste: 17
      const { data } = await getMovie(`/3/movie/${3}?api_key=${API_KEY}`);
      const { id, adult, genres, original_title, overview } = data;
      setMovie({id, adult, genres, original_title, overview});
      setLoading(false);
    } catch(e){
      console.log(e)
    }
  }

  useEffect(() => {
    if (!movie) fetchMovie();
  }, [movie]);

  return (
    <div>
      <h1>Details</h1>
      <p>{movie?.id}</p> 
      <p>{movie?.original_title}</p> 
      <p>{movie?.overview}</p>

      <p>{movie?.genres[0].name}</p>   

    </div>
    
  );
}
