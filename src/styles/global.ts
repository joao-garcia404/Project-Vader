import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --green: #00D369;

    --input: #F0F0F0;

    --title-dark: #000;
    --text-dark: #000;
    --text-white: #fff;

    --inputBackground: #f0f0f0;

    --button-disabled: #e5e5e5;

    --background: #F1F2F7;
    --shape: #ffffff;

    // Toast colors override
    --toastify-color-success: #00D369;
    --toastify-color-error: #DD5554;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--background);
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
