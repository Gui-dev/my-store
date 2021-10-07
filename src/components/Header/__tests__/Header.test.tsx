import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'

import { Header } from './../'

describe('<Header />', () => {
  it('renders correctly', () => {
    render(<BrowserRouter><Header /></BrowserRouter>)

    expect(screen.getByText('MyStore')).toBeInTheDocument()
  })
})
