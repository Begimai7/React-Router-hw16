import React from 'react'
import { Button } from '../components/UI/Button'
import { Card } from '../components/UI/Card'
import { useGoBack } from '../hooks/useGoBack'

export const MyCard = () => {
  const {goBack} = useGoBack()
  return (
    <>
    <Card>
     <p>My Card Page!!!</p>
    </Card>
    <Button onClick={goBack}> Go back</Button>
   </>
  )
}
