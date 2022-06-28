import{FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import{GiNoodles, GiTacos} from 'react-icons/gi';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

import React from 'react'

function Category() {
  return (
    <List>
        <Slink to={"/cuisine/Italian"}>
            <FaPizzaSlice />
            <h4>Italian</h4>
        </Slink>
        <Slink to={"/cuisine/American"}>
            <FaHamburger />
            <h4>American</h4>
        </Slink>
        <Slink to={"/cuisine/Thai"}>
            <GiNoodles />
            <h4>Thai</h4>
        </Slink>
        <Slink to={"/cuisine/Mexican"}>
            <GiTacos />
            <h4>Mexican</h4>
        </Slink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 1.5rem 0rem;
`;

const Slink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 1.5rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 5rem;
    height: 5rem;
    cursor: pointer;
    transform: scale(0.8);


    h4{
        color: #ffffff;
        font-size: .7rem;
    }

    svg{
        color: #ffffff;
        font-size: 2rem;
        margin-bottom: .4rem;
    }

    &.active,
    &:hover{
        background: linear-gradient(to right, #f27121, #e94057);

        h4{
            color: #ffffff;
        }
    
        svg{
            color: #ffffff;
        }
    }
`;

export default Category
