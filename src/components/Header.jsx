import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Header = () => {
  return (
    <HeaderContainer>
    <Logo href="/">Logo</Logo>

    <nav>
      <NavList>
       <li>
        <Link to="/products">Products</Link>
       </li>
       <li>
        <Link to="/myCard">My Card</Link>
       </li>
       <li>
        <Link to="/myOrder">My Order</Link>
       </li>
      </NavList>
    </nav>
    </HeaderContainer>
  )
}
const HeaderContainer = styled.header`
 background-color: #5eadee;
 padding: 20px 50px;
 display: flex;
 justify-content: space-between;
 align-items: center;
`
const Logo = styled.a`
 text-decoration: none;
 text-transform: uppercase;
 font-weight: bold;
 color: #fff;
 font-size: 20px;
`
const NavList = styled.ul`
 display: flex;
 list-style: none;
 gap: 30px;
 color: #fff;
 font-weight: bold;
 cursor: pointer;

 a{
  color: #fff;
  text-decoration: none;

  :hover{
    color: #000;
  }
 }
`
