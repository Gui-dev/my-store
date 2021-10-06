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
    position: relative;
    display: flex;
    align-items: center;  

    > div {
      position: absolute;
      top: -1.8rem;
      right: -1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      color: var(--white);
      padding: 1rem;
      height: 1rem;
      width: 1rem;
      background-color: var(--green-500);
      border-radius: 50%;
    }

    &:hover svg {
      fill: var(--yellow-500);
    }
  }
`
