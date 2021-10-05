import styled from 'styled-components'
import { lighten } from 'polished'

export const Container = styled.div`
  display: flex;
  margin: 3rem 10%;
`

export const Table = styled.table`
  width: 100%;
  
  tbody {    
    tr {
      position: relative;
      display: flex;
      flex-direction: column;
      padding: 1.5rem;
      background-color: var(--gray-800);
      margin-bottom: 2rem;

      td {
        display: flex;
        flex-direction: row;

        img {
          margin-right: 1.5rem;
          height: 8rem;
          width: 8rem;
        }
      }
    }
  }

`

export const Info = styled.div`
  h1 {
    font-size: 1.6rem;
    font-weight: bold;          
  }

  strong {
    font-size: 2rem;
    font-weight: bold; 
    margin-top: 1.5rem;
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: var(--white);
    height: 3rem;
    width: 3rem;
    background-color: var(--green-500);
    border: 1px solid var(--green-500);
    border-radius: .4rem;
    transition: background-color 0.3s;
    cursor: pointer;
  }

  > input {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 3rem;
    width: 5rem;
  }

  .trash {
    position: absolute;
    right: 1rem;
    background-color: transparent;
    border: 0;
  }

`

export const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  span {
    display: block;
    font-size: 1.6rem;
  }

  strong {
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--white);
  }
`

export const Finish = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
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
`
