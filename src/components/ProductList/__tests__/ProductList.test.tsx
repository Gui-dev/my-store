import React from 'react'
import { render, screen } from '@testing-library/react'

import { ProductList } from './../'

const product = {
  id: '1',
  createdAt: '2019-09-02T12:58:54.103Z',
  name: 'Rustic Metal Fish',
  price: '289.00',
  image: 'http://lorempixel.com/640/480/food',
  stock: 65171
}

describe('<ProductList />', () => {
  it('renders correctly', () => {
    render(<ProductList product={product}/>)

    expect(screen.getByText('Add to Cart')).toBeInTheDocument()
  })

  it('should have a heading', () => {
    render(<ProductList product={product}/>)
    expect(screen.getByRole('heading', {
      name: /rustic metal fish/i
    })).toBeInTheDocument()
  })

  it('add product to cart', () => {
    render(<ProductList product={product}/>)
    expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument()
  })
})
