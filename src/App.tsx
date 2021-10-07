import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Modal from 'react-modal'

import { CartProvider } from './contexts/CartContext'
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { Routes } from './routes'

Modal.setAppElement('#root')

function App () {
  return (
    <CartProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes />
        <ToastContainer
          style={{ fontSize: '16px' }}
        />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
