import styled from "styled-components";
import { colors } from "../../configs/colors";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 80%;
  width: 80%;
  max-width: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow-x: scroll;
  gap: 10px;
`;

export const Card = styled(Link)`
  min-width: 250px;
  height: 450px;
  background-color: ${colors.grayBlur};
  border: 1px solid ${colors.gray};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  img {
    max-width: 100%;
  }
`;
