import { useEffect, useState } from 'react'

import { api } from '../../services/api'

import { ProductList } from '../../components/ProductList'
import { Container } from './style'

type Product = {
  id: string
  createdAt: string
  name: string
  price: string
  image: string
  stock: number
}

export const Home = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    api.get('/product')
      .then(response => {
        const result = response.data
        setProducts(result)
      })
  }, [])

  return (
    <Container>
      { products.slice(0, 3).map(product => {
        return (
          <ProductList
            key={ String(product.id) }
            product={ product }
          />
        )
      }) }
    </Container>
  )
}
