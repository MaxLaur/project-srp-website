import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Space Grotesk', sans-serif;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: #191e1a;
  }
  h1 {
    font-family: 'Faster One', cursive;
  }
`;

export default GlobalStyle;