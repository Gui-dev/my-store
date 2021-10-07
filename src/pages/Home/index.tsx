import React, { useEffect, useState } from 'react'

import { api } from '../../services/api'

import { ProductList } from '../../components/ProductList'
import { formattedPrice } from '../../utils/formattedPrice'
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
    api.get<Product[]>('/product')
      .then(response => {
        const result = response.data.map(product => {
          return {
            ...product,
            formattedPrice: formattedPrice(Number(product.price))
          }
        })
        setProducts(result)
      })
  }, [])

  return (
    <Container>
      { products.slice(0, 9).map(product => {
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
