import React from 'react'
import { render, screen } from '@testing-library/react'

import { CartItem } from '..'

const products = [
  {
    id: '1',
    createdAt: '2019-09-02T12:58:54.103Z',
    name: 'Rustic Metal Fish',
    price: '289.00',
    image: 'http://lorempixel.com/640/480/food',
    stock: 65171,
    formattedPrice: 'R$ 930,00',
    subtotal: 'R$ 430,00',
    amount: 2
  }
]

const total = 'R$ 930,00'

const onHandleIncrementProductAmount = jest.fn()
const onHandleDecrementProductAmount = jest.fn()
const onHandleRemoveProductCart = jest.fn()

describe('<CartItem />', () => {
  beforeEach(() => {
    render(<CartItem
      products={ products }
      total={ total }
      onHandleDecrementProductAmount={() => onHandleIncrementProductAmount(products[0].id, products[0].amount)}
      onHandleIncrementProductAmount={() => onHandleDecrementProductAmount(products[0].id, products[0].amount)}
      onHandleRemoveProductCart={() => onHandleRemoveProductCart(products[0].id)}
    />)
  })
  it('should be render correctly', () => {
    expect(screen.getByRole('heading', { name: /rustic metal fish/i })).toBeInTheDocument()
  })

  it('should have subtotal', () => {
    expect(screen.getByText(/subtotal: r\$ 430,00/i)).toBeInTheDocument()
  })
})
