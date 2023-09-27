import { Wrapper, Credits } from "./styles";
import { VscHeartFilled } from "react-icons/vsc";

export default function Footer() {
  return (
    <Wrapper>
      <Credits>
        Desenvolvido com amor por BotoBit{" "}
        <VscHeartFilled size={12} color={"#F00"} />
      </Credits>
    </Wrapper>
  );
}
