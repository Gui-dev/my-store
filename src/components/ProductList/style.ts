import styled from 'styled-components'
import { lighten } from 'polished'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin: 3rem 10%;
  
  article {
    padding: 1.5rem;
    background-color: var(--gray-600);
    border-radius: .3rem;

    & + article {
      margin-bottom: 2rem;
    }

    img {
      max-width: 100%;
    }

    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 1.5rem;

      h1 {
        font-size: 1.6rem;
        color: var(--gray-900);
      }

      strong {
        font-size: 2rem;
        color: var(--gray-900);
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 2rem;
      height: 5rem;
      width: 100%;
      background-color: var(--green-500);
      border: 1px solid var(--green-500);
      border-radius: .4rem;
      transition: background-color 0.3s;
      cursor: pointer;

      span {
        font-size: 2rem;
        font-weight: bold;
        color: var(--white);
        margin-top: 3px;
      }

      svg {
        margin-right: 1rem;
      }

      &:hover {
        background-color: ${lighten(0.07, '#3EB595')};
      }
    }
  }
`
