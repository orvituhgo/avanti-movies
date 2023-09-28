import { Container } from "./styles";
import { AiOutlinePlus } from "react-icons/ai";

type Props = {
  size: number;
  onClickCustom: () => void;
};

export default function PlusBtn({ size, onClickCustom }: Props) {
  return (
    <Container onClick={onClickCustom}>
      <AiOutlinePlus size={size} />
    </Container>
  );
}
