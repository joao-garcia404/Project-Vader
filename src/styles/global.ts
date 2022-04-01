import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --green: #00D369;

    --input: #F0F0F0;

    --title-dark: #000;
    --text-dark: #000;
    --text-white: #fff;

    --background: #F1F2F7;
    --shape: #ffffff;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: var(--green);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: var(--text-white);
  }

  html { 
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased; 
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
