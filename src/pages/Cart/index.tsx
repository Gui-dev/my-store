import { FiTrash } from 'react-icons/fi'
import { useCart } from '../../hooks/useCart'
import { formattedPrice } from '../../utils/formattedPrice'

import { Actions, Container, Info, Table } from './style'

export const Cart = () => {
  const { cart, removeProduct, updateProductAmount } = useCart()
  const products = cart.map(product => {
    return {
      ...product,
      formattedPrice: formattedPrice(Number(product.price)),
      subtotal: formattedPrice(Number(product.price) * Number(product.amount))
    }
  })

  const total = formattedPrice(
    products.reduce((sumTotal, product) => {
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
      <Table>
        <tbody>

          { products.length > 0
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
                          () => handleDecrementProductAmount(product.id, product.amount)
                        }
                      >
                        -
                      </button>
                      <input type="text" readOnly value={ product.amount }/>
                      <button
                        onClick={
                          () => handleIncrementProductAmount(product.id, product.amount)
                        }
                      >
                        +
                      </button>
                    </Actions>
                  </td>
                  <td>
                    <button
                      className="trash"
                      onClick={ () => handleRemoveProductCart(product.id) }
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

          { products.length > 0 && (
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
    </Container>
  )
}
