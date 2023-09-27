import { Route, Routes } from "react-router-dom";

import Homepage from "../pages/Homepage";
import Details from "../pages/Details";
import Favorites from "../pages/Favorites";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/details/:id" element={<Details />}></Route>
      <Route path="/favorites" element={<Favorites />}></Route>
    </Routes>
  );
}
