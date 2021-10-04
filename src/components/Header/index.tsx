import { RiShoppingCartLine, RiStore3Line } from 'react-icons/ri'

import { Container } from './style'

export const Header = () => {
  return (
    <Container>
      <a href="/" className="home">
        <h1>MyStore <span>.</span></h1> <RiStore3Line size={30} color="#FFF"/>
      </a>

      <a href="/cart" className="cart">
        <RiShoppingCartLine size={30} color="#FFF"/>
      </a>
    </Container>
  )
}
