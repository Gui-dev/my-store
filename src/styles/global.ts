import { createGlobalStyle } from 'styled-components'
import { lighten } from 'polished'

import 'react-toastify/dist/ReactToastify.css'

export const GlobalStyle = createGlobalStyle`
  :root {
    --gray-900: #121212;
    --gray-800: #1A1A1A;
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

  button {
    cursor: pointer
  }

  .react-modal-overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, .5);
  }

  .react-modal-content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 10%;
    padding: 2rem;
    width: 100%;
    max-width: 576px;
    background-color: var(--white);
    border-radius: 0.4rem;

    @media (min-width: 720px) {
      padding: 4.8rem;
    }

    h1 {
      font-size: 2rem;
      font-weight: bold;
      color: var(--gray-900);
      margin-bottom: 1.5rem;
    }

    p {
      font-size: 1.6rem;
      font-weight: bold;
      color: var(--gray-600);
      margin-bottom: 1.5rem;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      font-weight: bold;
      color: var(--white);
      margin-top: 2rem;
      height: 5rem;
      width: 100%;
      background-color: var(--green-500);
      border: 1px solid var(--green-500);
      border-radius: .4rem;
      transition: background-color 0.3s;
      cursor: pointer;

    &:hover {
      background-color: ${lighten(0.07, '#3EB595')};
    }
  }
    
  }
`
