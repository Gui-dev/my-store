import React from 'react'
import { FiTrash } from 'react-icons/fi'

import { Actions, Info, Table } from './style'

type ProductsProps = {
  id: string
  createdAt: string
  name: string
  price: string
  image: string
  stock: number | undefined
  formattedPrice: string
  subtotal: string
  amount: number
}

type CartItemProps = {
  products: ProductsProps[]
  total: string
  onHandleIncrementProductAmount: (productId: string, amount: number) => Promise<void>
  onHandleDecrementProductAmount: (productId: string, amount: number) => Promise<void>
  onHandleRemoveProductCart: (productId: string) => Promise<void>
}

export const CartItem = ({
  products,
  total,
  onHandleDecrementProductAmount,
  onHandleIncrementProductAmount,
  onHandleRemoveProductCart
}: CartItemProps) => {
  return (
    <Table>
        <tbody>

          { products?.length > 0
            ? products.map(product => {
              return (

                <tr key={ String(product.id) }>
                  <td>
                    <img src={ product.image } alt={ product.name } />
                  </td>
                  <td>
                    <Info>
                      <h1>{ product.name }</h1>
                      <strong>{ product.formattedPrice }</strong>
                      <strong>Subtotal: { product.subtotal }</strong>
                    </Info>
                  </td>
                  <td>
                    <Actions>
                      <button
                        onClick={
                          () => onHandleDecrementProductAmount(product.id, product.amount)
                        }
                      >
                        -
                      </button>
                      <input type="text" readOnly value={ product.amount }/>
                      <button
                        onClick={
                          () => onHandleIncrementProductAmount(product.id, product.amount)
                        }
                      >
                        +
                      </button>
                    </Actions>
                  </td>
                  <td>
                    <button
                      className="trash"
                      onClick={ () => onHandleRemoveProductCart(product.id) }
                    >
                      <FiTrash size={24} color="red"/>
                    </button>
                  </td>
                </tr>
              )
            })
            : (
              <tr>
                <td>
                  <p className="emptyCart">Você ainda não possui produtos no seu carrinho</p>
                </td>
              </tr>
              )
          }

          { products?.length > 0 && (
            <>
              <tr className="total">
                <td>
                  <span>Total</span>
                  <strong>{ total }</strong>
                </td>
              </tr>

              <tr className="finish">
                <td>
                  <button>
                    <span>Checkout</span>
                  </button>
                </td>
              </tr>
            </>
          ) }

        </tbody>
      </Table>
  )
}
