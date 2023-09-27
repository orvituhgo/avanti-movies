import { useEffect, useState } from "react";

import getGenres from "../../services/getGenres";
import { Genres } from "../../@types/Genres";

import Loader from "../../components/Loader";
import MoviesPage from "../../components/MoviesPage";

export default function Homepage() {
  const [genres, setGenres] = useState<Genres>();
  const [loading, setLoading] = useState(true);
  const [activeGenre, setActiveGenre] = useState("");

  async function fetchGenres() {
    try {
      const { data } = await getGenres();
      setGenres(data.genres);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (!genres?.length) fetchGenres();
  }, [genres]);

  return (
    <div>
      <h1>Homepage</h1>
      {loading ? (
        <Loader />
      ) : (
        <select onChange={(e) => setActiveGenre(e.target.value)}>
          <option>Selecionar</option>
          {genres?.length ? (
            genres.map((genre) => (
              <option value={genre.name} key={genre.id}>
                {genre.name}
              </option>
            ))
          ) : (
            <option>Nada encontrado</option>
          )}
        </select>
      )}
      <MoviesPage />
    </div>
  );
}
