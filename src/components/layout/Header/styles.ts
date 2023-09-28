import styled from "styled-components";

import { colors } from "../../../configs/colors";

export const Wrapper = styled.header`
  height: 12rem;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100vw;
  align-items: center;
`;

export const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Logo = styled.div`
  background: linear-gradient(180deg, #fff 49.9%, rgba(217, 217, 217, 0) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  height: fit-content;
`;

export const Title = styled.h1`
  margin-left: 2rem;
  background: linear-gradient(180deg, #fff 49.9%, rgba(217, 217, 217, 0) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Button = styled.button`
  background-color: white;
  color: ${colors.primary};
  height: 80px;
  border-radius: 4px;
  min-width: 100px;
  font-size: 18px;
  font-weight: bold;
`;
