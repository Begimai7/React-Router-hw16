import React from 'react'
import { Button } from '../components/UI/Button'
import { Card } from '../components/UI/Card'
import { useGoBack } from '../hooks/useGoBack'

export const MyOrder = () => {
  const {goBack} = useGoBack()
  return (
    <>
     <Card>
      <p>My Order Page!!!</p>
     </Card>
     <Button onClick={goBack}> Go back</Button>
    </>
  )
}
