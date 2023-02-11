import React from 'react'
import styled from 'styled-components'

export const Button = ({children, ...rest}) => {
  return (
    <ButtonStyled {...rest}>{children}</ButtonStyled>
  )
}
const ButtonStyled = styled.button`
 background-color: #2fc492;
 color: #fff;
 padding: 10px 20px;
 border: none;
 border-radius: 20px;
 font-weight: bold;

`