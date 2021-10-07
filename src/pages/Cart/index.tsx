import React, { useState } from 'react'
import { useCart } from '../../hooks/useCart'
import { formattedPrice } from '../../utils/formattedPrice'
import Modal from 'react-modal'

import { CartItem } from './../../components/CartItem'

import { Container } from './style'

export const Cart = () => {
  const [modalIsOpen, setIsOpen] = useState(false)
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

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <Container>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <h1>Parebéns pela compra</h1>
        <p>Volte Sempre</p>

        <button>Finalizar</button>
      </Modal>

     <CartItem
      products={ products }
      total={ total }
      onHandleDecrementProductAmount={ handleDecrementProductAmount }
      onHandleIncrementProductAmount={ handleIncrementProductAmount }
      onHandleRemoveProductCart={ handleRemoveProductCart }
      onOpenModal={ openModal }
     />
    </Container>
  )
}
