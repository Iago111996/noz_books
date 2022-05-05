import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #E0E6EE;;
    --shape: #FFFFFF;
    --danger: #B22E6F; 

    --background-secondary: rgba(0, 0, 0, 0.32);;

    --background-alert: #75A8F5;

    --title: #333333;
    --subtitle: #2E63F7;
    --text: #999999;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    height: 100%;

    @media(max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media(max-width: 720px) {
      font-size: 87.5%; // 14 px
    }
  }

  body {
    height: 100%;
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  } 

  body, input, textarea, button {
    font-family: "Heebo", sans-serif;
    font-weight: 400;
  }

  button: {
    cursor: pointer
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
