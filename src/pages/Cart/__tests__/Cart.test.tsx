import React from 'react'
import { render, screen } from '@testing-library/react'

import { Cart } from '..'

describe('<Cart />', () => {
  it('should have a empty cart', () => {
    render(<Cart />)

    expect(
      screen.getByText(/você ainda não possui produtos no seu carrinho/i)
    ).toBeInTheDocument()
  })
})
