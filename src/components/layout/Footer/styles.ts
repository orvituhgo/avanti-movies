import styled from "styled-components";
import { colors } from "../../../configs/colors";

export const Wrapper = styled.footer`
  height: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Credits = styled.h3`
  text-align: center;
  color: ${colors.text};
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 2px;

  & a {
    color: #1c50a1 !important;

    &:hover {
      text-decoration: underline;
    }
  }
`;
