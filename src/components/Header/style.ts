import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 7rem;
  margin: 0 10%;
  margin-top: 2rem;

  .home {
    display: flex;
    align-items: center;        
    text-decoration: none;
    
    h1 {
      font-size: 2.5rem;
      color: var(--gray-100);
      margin-right: 1rem;
      
      span {
        font-size: 4rem;
        color: var(--yellow-500);
      }
    }

    &:hover svg {
      fill: var(--yellow-500);
    }
  }

  .cart {
    display: flex;
    align-items: center;  

    &:hover svg {
      fill: var(--yellow-500);
    }
  }
`
