import React from 'react'
import { useParams } from 'react-router-dom'
import { Card } from '../components/UI/Card'

export const ProductDetails = () => {
 const param = useParams()
 console.log();

  return (
    <Card>
    <p> Product Details Page</p>
     <p>Product Name {param.id}</p>
    </Card>
  )
}
