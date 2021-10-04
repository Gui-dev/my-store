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
      color: #FFF;
      margin-right: 1rem;
      
      span {
        font-size: 4rem;
        color: yellow;
      }
    }

    &:hover svg {
      fill: yellow
    }
  }

  .cart {
    display: flex;
    align-items: center;  

    &:hover svg {
      fill: yellow
    }
  }
`
