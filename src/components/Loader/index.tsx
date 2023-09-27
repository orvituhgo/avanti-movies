import { TbMovieOff } from "react-icons/tb";
import { Fading } from "./styles";

export default function Loader() {
  return (
    <Fading>
      <TbMovieOff size={150} />
    </Fading>
  );
}
