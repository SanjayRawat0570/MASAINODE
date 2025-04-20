import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import props from 'prop-types'
export default function Header() {
  const navigate = useNavigate();
  return (
    <Container className="flex a-center j-between">
    <div className="logo">
      <img src={logo} alt="logo" />
      </div>
  <button  onClick = {()=> navigate (props.login ? "/login" : "/signup")}> {props.login ? "Log in" : "sign in "} 

  </button>
  </Container>
  );
}
const Container = styled.div`
padding: 0 4rem;
.logo {
  img {
    height : 3rem;
  }
}
  button {
  background-color:  #e50914;
  border : none;
  cursor : pointer;
  color : white;
  border-radius : 0.2rem;
  font-weight : bolder;
  font -size : 1.2rem;
  
  }
  `;
