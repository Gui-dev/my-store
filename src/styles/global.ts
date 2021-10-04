import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --gray-900: #1A1A1A;
    --gray-600: #696969;
    --gray-100: #C9C9C9;
    --green-500: #3EB595;
    --yellow-500: #FFF447;
    --white: #FFF;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-size: 62.5%;
    font-family: 'Roboto', sans-serif;
    color: var(--gray-100);
    background-color: var(--gray-900);
  }
`
