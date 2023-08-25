import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};  
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, label, select, textarea {
    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
    transform: filter 0.3s;
  }

  a:hover {
    filter: brightness(0.7);
  }

  a, button {
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
  }

  ul {
    list-style: none;
  }
`;
