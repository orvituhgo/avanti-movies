import { TbMovieOff } from "react-icons/tb";
import { Fading } from "./styles";

type Props = {
  size: number;
};

export default function Loader({ size }: Props) {
  return (
    <Fading>
      <TbMovieOff size={size} />
    </Fading>
  );
}
