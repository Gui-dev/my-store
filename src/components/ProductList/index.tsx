import { RiShoppingCartLine } from 'react-icons/ri'

import { useCart } from '../../hooks/useCart'

import { Container } from './style'

type ProductListProps = {
  product: {
    id: string
    createdAt: string
    name: string
    price: string
    image: string
    stock: number
  }
}

export const ProductList = ({ product }: ProductListProps) => {
  const { addProduct } = useCart()

  const handleAddProductToCart = (productId: string) => {
    addProduct(productId)
  }

  return (
    <Container>
      <img src={ product.image } alt={ product.name } />

      <div>
        <h1> { product.name } </h1>
        <strong>{ product.price }</strong>
      </div>

      <button onClick={ () => handleAddProductToCart(product.id) }>
        <RiShoppingCartLine size={24} color="#FFF"/>
        <span>Add to Cart</span>
      </button>
    </Container>
  )
}
