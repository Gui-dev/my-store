import { FiTrash } from 'react-icons/fi'

import { Actions, Container, Finish, Info, Table, Total } from './style'

export const Cart = () => {
  const product = {
    id: '2',
    createdAt: '2019-09-02T07:59:58.181Z',
    name: 'Sleek Wooden Soap',
    price: '430.00',
    image: 'http://lorempixel.com/640/480/transport',
    stock: 91260
  }

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>

              <img src={ product.image } alt={ product.name } />
              <Info>
                <h1>{ product.name }</h1>
                <strong>{ product.price }</strong>

                <Actions>
                  <button>-</button>
                  <input type="text" value="2" min="1"/>
                  <button>+</button>

                  <button className="trash">
                    <FiTrash size={24} color="red"/>
                  </button>
                </Actions>

              </Info>
            </td>
          </tr>

          <tr>
            <td>
              <Total>
                <span>Total</span>
                <strong>860.00</strong>
              </Total>
            </td>
          </tr>

          <tr>
            <td>
              <Finish>
                <button>
                  <span>Checkout</span>
                </button>
              </Finish>
            </td>
          </tr>

        </tbody>
      </Table>
    </Container>
  )
}
