import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "../configs/colors";

const GlobalStyle = createGlobalStyle`

    *,
    #root,
    *:before,
    *:after {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }

    html {
      color: ${colors.text};
      font-size: 62.5%;
      font-family: "Open Sans",-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Oxygen, Ubuntu, Cantarell,  "Helvetica Neue", sans-serif;
    }

    body {
      background: radial-gradient(${colors.primary}, ${colors.secundary});
    }

    a,
    a:hover,
    a:visited {
      text-decoration: none;
      color: inherit;
      cursor: pointer;
    }
`;

export const LinkStyled = styled(Link)`
  background-color: white;
  color: ${colors.primary};
  height: 40px;
  border-radius: 4px;
  min-width: 100px;
`;

export default GlobalStyle;
