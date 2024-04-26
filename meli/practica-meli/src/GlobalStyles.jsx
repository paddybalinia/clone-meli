import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    font-family: ${(props) => props.theme.fonts.primary} ;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light dark;
    color: black;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
  }

  a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
  }

  a:hover {
    color: #535bf2;
  }
  html{
    background: ${(props) => props.theme.colors.bgSecondary}; 
    min-height: 100%;
  }
  body {
    font-family: "ProximaNova";
    margin: 0;
    min-height: 100%;
  }


  a {
    text-decoration: none;
    outline: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  figure,
  ul,
  ol,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  img {
    border: none;
    vertical-align: top;
    text-indent: -9999px;
  }

  fieldset {
    border: none;
    padding: 0;
    margin: 0;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    outline: 0;
    padding: 0;
  }

  input:focus,
  input {
    font-size: 16px;
  }

  *:focus {
    outline: none;
    -webkit-box-shadow: none;
            box-shadow: none;
  }

  @font-face {
      font-family: "ProximaNova";
      src: url("./src/fonts/ProximaNova-400.woff2") format("woff2");
      font-weight: 400;
      font-display: swap;
    }

    @font-face {
      font-family: "ProximaNova";
      src: url("./src/fonts/ProximaNova-500.woff2") format("woff2");
      font-weight: 500;
      font-display: swap;
    }

    @font-face {
      font-family: "ProximaNova";
      src: url("./src/fonts/ProximaNova-600.woff2") format("woff2");
      font-weight: 600;
      font-display: swap;
    }  
`;

export default GlobalStyle;
