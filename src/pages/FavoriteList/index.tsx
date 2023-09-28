import { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesProvider";

import { Favorite } from "../../@types/Favorites";

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
          <FavItem>
            Nenhuma item adicionado aos favoritos. Click em + aos lado do filme
            desejado
          </FavItem>
        )}
      </ul>
    </div>
  );
}
