import { Favorites } from "../@types/Favorites";

export const getFavorites = async () => {
  const storedValue = await localStorage.getItem("favorite");
  return JSON.parse(storedValue as string);
};

export const postFavorites = async (value: Favorites) => {
  if (!value) return;
  const valueToStorage = JSON.stringify(value);
  await localStorage.setItem("favorite", valueToStorage);
  console.log("postFavorites");
};
