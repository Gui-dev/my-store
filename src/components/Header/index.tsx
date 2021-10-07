import React from 'react'
import { Link } from 'react-router-dom'
import { RiShoppingCartLine, RiStore3Line } from 'react-icons/ri'

import { useCart } from '../../hooks/useCart'

import { Container } from './style'

export const Header = () => {
  const { cart } = useCart()
  return (
    <Container>
      <Link to="/" className="home">
        <h1>MyStore <span>.</span></h1> <RiStore3Line size={30} color="#FFF"/>
      </Link>

      <Link to="/cart" className="cart">

        { cart?.length > 0 && (
          <div>{ cart.length }</div>
        ) }

        <RiShoppingCartLine size={30} color="#FFF"/>
      </Link>
    </Container>
  )
}
