import React from 'react'
import styled from 'styled-components'

export const Card = ({children}) => {
  return (
    <CardStyled>{children}</CardStyled>
  )
}

const CardStyled = styled.div`
 width: 70%;
 background-color: #fff;
 padding: 20px;
 margin: 1rem  auto;
 border-radius: 10px;
`