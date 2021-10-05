import { RiShoppingCartLine } from 'react-icons/ri'

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
  return (
    <Container>
      <article>
        <img src={ product.image } alt={ product.name } />

        <div>
          <h1> { product.name } </h1>
          <strong>{ product.price }</strong>
        </div>

        <button>
          <RiShoppingCartLine size={24} color="#FFF"/>
          <span>Add to Cart</span>
        </button>
      </article>

    </Container>
  )
}
