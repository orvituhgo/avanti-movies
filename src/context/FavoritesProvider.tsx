import { ReactNode, createContext, useEffect, useState } from "react";

import { getFavorites, postFavorites } from "../utils/localStorage";
import { Favorite, Favorites } from "../@types/Favorites";

type Props = { children: ReactNode };

export const FavoritesContext = createContext({});

export default function FavoritesContextProvider({ children }: Props) {
  const [favorites, setFavorites] = useState<Favorites>();

  // const watcherFavorites = getFavorites();

  useEffect(() => {
    const fetchFavorites = async () => {
      const storedValue = await getFavorites();
      setFavorites(storedValue);
    };

    fetchFavorites();
  }, []);

  const addFavorite = (favorite: Favorite) => {
    if (!favorite) return;
    const newFavorites = favorites?.map((favorite) => favorite) || [];
    newFavorites?.push(favorite);
    postFavorites(newFavorites);
    setFavorites(newFavorites);
    alert("Adicionado aos favoritos");
    console.log(newFavorites, favorite);
  };

  const value = {
    favorites,
    addFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
