import styled from 'styled-components'
import { lighten } from 'polished'

export const Table = styled.table`
  width: 100%;
  
  tbody {    
    tr {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 1.5rem;
      background-color: var(--gray-800);
      margin-bottom: 2rem;

      @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
      }

      td {
        display: flex;
        flex-direction: row;        

        img {
          height: 8rem;
          width: 10rem;
        }

        .trash {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background-color: transparent;
          border: 0;

          @media (min-width: 768px) {
            top: 6rem;
          }
        }
      }
    }

    .emptyCart {
      font-size: 2rem;
      text-align: center;
    }

    .total {
      td {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
        
        span {
          display: block;
          font-size: 1.6rem;
          margin-right: 2rem;
        }

        strong {
          font-size: 2.5rem;
          font-weight: bold;
          color: var(--green-500);
        }
      }   
    }

    .finish {
      td {
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


        @media (min-width: 768px) {
          width: 20rem;
        }

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
      }
  }

`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 1.6rem;
    font-weight: bold;    
    margin-top: 1.6rem;
  }

  strong {
    display: block;
    font-size: 2rem;
    font-weight: bold; 
    color: var(--white);
    margin-top: 1rem;
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
`
