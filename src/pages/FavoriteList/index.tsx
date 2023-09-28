import { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesProvider";

import { Favorite, Favorites } from "../../@types/Favorites";

import { FavItem, SectionTitle } from "./styles";

export default function FavoriteList() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div>
      <SectionTitle>Favorites</SectionTitle>
      <ul>
        {favorites?.length ? (
          favorites.map((favorite: Favorite) => (
            <FavItem>{favorite.title}</FavItem>
          ))
        ) : (
          <FavItem>Nenhuma item adicionado aos favoritos</FavItem>
        )}
      </ul>
    </div>
  );
}
