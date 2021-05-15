import React from 'react';
import Logo from '../img/logo.png'

import {Link } from 'react-router-dom';
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  gap: 50px;
  grid-template-rows: 200px 320px;
  background: ${({theme}) => theme.color.bgPrimary};
  border-right: 1.5px solid ${({theme}) => theme.color.border};
`

const LogoS = styled.div`
  display: grid;
  place-items: center;

  img {
    width: 150px;
  }
`
const NavS = styled.nav`
  display:  grid;

  a {
    font: 500 16px 'poppins';
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
    padding-left: 40px;
    transition: background 0.4s ease;
    margin: 10px 20px;
    border-radius: 10px;

    &:hover {
      background: ${({theme}) => theme.color.primary};
    }

    span {
      margin-right: 20px;
    }
  }
`

const BtnLogout = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font: normal 16px poppins;
  margin: 200px 40px 20px 40px;
  border-radius: 10px;
  border: 1px solid ${({theme}) => theme.color.border};
  color: white;
  background: none;
  cursor: pointer;
  transition: background 0.4s ease;

  &:hover {
    background: ${({theme}) => theme.color.primary50};
  }

  span {
    margin-right: 10px;
  }
`

function Nav({}) {
  return (
    <Container>
      <LogoS>
        <img src={Logo} />
      </LogoS>
      <NavS>
        <Link to="/"><span className="material-icons">room_service</span> Ordenes</Link>
        <a href="#!"><span className="material-icons">restaurant_menu</span> Lorem</a>
        <a href="#!"><span className="material-icons">thumb_up</span> Ipsum</a>
        <a href="#!"><span className="material-icons">thumb_up</span> Dolor amet</a>
      </NavS>

      <BtnLogout><span className="material-icons">login</span> Salir</BtnLogout>
    </Container>
  );
}

export default Nav;