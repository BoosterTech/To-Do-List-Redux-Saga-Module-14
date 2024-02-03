import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

::before,
::after {
  box-sizing: inherit;
}

body {
  background-color: rgb(221, 215, 215);
  font-family: 'Montserrat', sans-serif;
  width: 100vw;
  margin:0;
  padding-right: 15px;
  font-size: small;
  overflow-x: hidden; 

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    overflow: hidden;
  }
}
`;
