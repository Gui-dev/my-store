import { BrowserRouter } from 'react-router-dom'

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
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
