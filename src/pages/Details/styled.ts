import styled from "styled-components";
import { colors } from "../../configs/colors";

export const MoviePageDiv = styled.div`
  color: ${colors.text};
  font-family: 'Raleway';
  max-width: 60%;
  margin: 2rem auto;
`;

export const MoviePageDivImg = styled.div`
  position: relative;
  display: inline-block;
  width: 400px;
  height: 400px;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const MoviePageImg = styled.img`
  /*
  height: 50%;
  width: 50%;
  border-radius: 50%;
  overflow: hidden;
  display:inline-block;
  vertical-align:middle;
*/
  width: 100%;
  height: auto;
`;

export const MovieTitle = styled.div`
  font-size: 40px;
`;

export const MovieSinopse = styled.div`
  text-align: left;
  font-size: 32px;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
`;

export const MovieSinopseText = styled.div`
  text-align: justify;
  font-size: 20px;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
`;



