import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html{
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after{
    box-sizing:inherit
  }

  body{
    background:#222;
    color:#ccc;
    font-family: "Lato";
  }
`;
