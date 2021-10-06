import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { CartProvider } from './contexts/CartContext'
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { Routes } from './routes'

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
