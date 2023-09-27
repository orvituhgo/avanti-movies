import styled from "styled-components";
import { colors } from "../../configs/colors";

export const MoviePageDiv = styled.div`
  color: ${colors.text};
  font-family: 'Raleway';
  max-width: 100%;
  max-height: 100%;
  margin: 2rem auto;
`;

export const MoviePageDivImg = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 10%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const MoviePageImg = styled.img`
  overflow: hidden;
  background-color: blue;
  display:inline-block;
  vertical-align:middle;
  border-radius: 50%;
  width: 15%;
  height: 10%;
`;

export const MovieTitle = styled.div`
  font-size: 40px;
`;

export const MovieSinopse = styled.div`
  text-align: left;
  margin-left: 20%;
  font-size: 32px;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
`;

export const MovieSinopseText = styled.div`
  text-align: left;
  width: 80%;
  font-size: 20px;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
`;



