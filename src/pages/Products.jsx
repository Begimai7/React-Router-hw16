import React, { useState } from 'react'
import { Link,Outlet, useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../components/UI/Button'
import { Card } from '../components/UI/Card'
import { useGoBack } from '../hooks/useGoBack'

export const Products = () => {
 const [details, setDetais] = useState(false)
 const {goBack} = useGoBack()

//  const navigate = useNavigate()

 const toddleHandler = () => {
  setDetais(prevS => !prevS)
  // navigate('products')
 }

  return (
    <div>
      {
        details ? <Outlet/> :
        <div>
          <Card>
              <ProductsList>
                <Link> Product Name 1</Link>
              <Button onClick={toddleHandler}>
                <Link  to="1">
                  Details
                </Link>
                </Button>
              </ProductsList>
        </Card>

            <Card>
            <ProductsList>
            <Link> Product Name 2</Link>
              <Button onClick={toddleHandler}>
                <Link to="2">
                  Details
                </Link>
                </Button>
              </ProductsList>
            </Card> 
        </div>
         } 
      <Button onClick={goBack}> Go Back</Button>  
    </div>
  )
}
const ProductsList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a{
    text-decoration: none;
    color: #000;
  }
`
