import React from 'react'
import { useCart } from '../../hooks/useCart'
import { formattedPrice } from '../../utils/formattedPrice'

import { CartItem } from './../../components/CartItem'

import { Container } from './style'

export const Cart = () => {
  const { cart, removeProduct, updateProductAmount } = useCart()
  const products = cart?.map(product => {
    return {
      ...product,
      formattedPrice: formattedPrice(Number(product.price)),
      subtotal: formattedPrice(Number(product.price) * Number(product.amount))
    }
  })

  const total = formattedPrice(
    products?.reduce((sumTotal, product) => {
      sumTotal += Number(product.price) * Number(product.amount)

      return sumTotal
    }, 0)
  )
  const handleIncrementProductAmount = async (productId: string, amount: number) => {
    updateProductAmount(productId, amount + 1)
  }

  const handleDecrementProductAmount = async (productId: string, amount: number) => {
    updateProductAmount(productId, amount - 1)
  }

  const handleRemoveProductCart = async (productId: string) => {
    await removeProduct(productId)
  }

  return (
    <Container>
     <CartItem
      products={ products }
      total={ total }
      onHandleDecrementProductAmount={ handleDecrementProductAmount }
      onHandleIncrementProductAmount={ handleIncrementProductAmount }
      onHandleRemoveProductCart={ handleRemoveProductCart }
     />
    </Container>
  )
}
