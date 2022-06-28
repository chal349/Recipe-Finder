import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import { GiKnifeFork } from "react-icons/gi"
import { FaHeart } from "react-icons/fa"


import React from 'react'

function Footer() {
    return (
      <List>
          <LogoLink to={"/"}>
            <GiKnifeFork />
            <h4>NomNomNom</h4>
          </LogoLink>

        <Links>
            <Nlink to={"/"}>
                <h4>Favorites</h4>
            </Nlink>
            <Nlink to={"/"}>
                <h4>Login</h4>
            </Nlink>
        </Links> 
          

      </List>
    )
  }

  
  const List = styled.div`
      display: flex;
      width: 100%;
      flex-wrap: wrap; 
      margin-top: 8rem; 
      height: 8rem;
      background-color:rgb(56, 56, 56);;
      justify-content: space-around;
      
  `;
  
  const LogoLink = styled(NavLink)`
      display: flex;
      text-decoration: none;
      justify-content: center;
      align-items: center;
      gap: .5rem;
      cursor: pointer; 
  
      h4{
          color: #ffffff;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 600;
      }
  
      svg{
          font-size: 1.5rem;
          color: #f27121;
      }
  
      /* &.active,
      &:hover{
          color: linear-gradient(to right, #f27121, #e94057);
      } */
  `;

const Links = styled.div`
display: flex;
flex-wrap: wrap;
margin: 2rem 0; 


`;  
    const Nlink = styled(NavLink)`
    display: flex;
    margin-left: 2rem;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    cursor: pointer; 

    h4{
        color: #ffffff;
        text-decoration: none;
        font-size: .5rem;
        font-weight: 600;
    }

    &:hover{
        h4{
            color: #f27121;
        }
    }
    `;

// const Logo = styled(Nlink)`
// text-decoration: none;
// font-size: 1.5rem;
// font-weight: 600;

// `;
  
  export default Footer