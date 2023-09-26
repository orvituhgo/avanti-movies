import { MdMovie } from "react-icons/md";
import { useLocation } from "react-router-dom";

import { Wrapper, Logo, Title, Content, Button, Container } from "./styles";
import { LinkStyled } from "../../../styles/GlobalStyles";

export default function Header() {
  const { pathname } = useLocation();

  return (
    <Wrapper>
      <Container>
        <Content>
          <Logo>
            <MdMovie size={80} color={"#FFF"} />
          </Logo>
          <Title>CLUBINHO DOS FILMINHO</Title>
        </Content>
        <LinkStyled to={pathname === "/" ? "/favorites" : "/"}>
          <Button type="button">
            {pathname === "/" ? "MINHA LISTA" : "CATÁLOGO"}
          </Button>
        </LinkStyled>
      </Container>
    </Wrapper>
  );
}
