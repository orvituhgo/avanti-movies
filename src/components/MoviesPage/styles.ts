import styled from "styled-components";
import { colors } from "../../configs/colors";

export const Container = styled.div`
  height: 80%;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  width: 200px;
  height: 420px;
  background-color: ${colors.grayBlur};
  border: 1px solid ${colors.gray};
  display: flex;
  justify-content: center;
  align-items: center;
`;
