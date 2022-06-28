import { useEffect, useState } from "react";
import styled from 'styled-components';
import { useParams } from "react-router-dom";

import React from 'react'

function Recipe() {

  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeButton, setActiveButton] = useState("instructions");

  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const detailData = await data.json();
    setDetails(detailData);
  }

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <Info>
        <Button className={activeButton === 'instructions' ? 'active' : ''} onClick={() => setActiveButton("instructions")}>
          Instructions
        </Button>
        <Button className={activeButton === 'ingredients' ? 'active' : ''} onClick={() => setActiveButton("ingredients")}>
          Ingredients
        </Button>
        {activeButton === "instructions" && (
          <div>
          <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
          <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
          </div>
        )}
        
        {activeButton === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
          )}
        
      </Info>
    </DetailWrapper>
  )
}


const DetailWrapper = styled.div`
  margin-top: 4rem;
  margin-bottom: 5rem;
  display: flex;
  .active{
    background: linear-gradient(35deg, #494949, #313131);
    color: #ffffff;
  }

  img{
    max-width: 30vw;
  }

  h2{
    margin-bottom: 2rem;
  }

  h3{
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 500;
  }

  li{
    font-size: 1.2rem;
    line-height: 2rem;
  }

  ul{
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  cursor: pointer;
  background-color: rgb(236, 236, 236);
  border: 2px solid #313131;
  margin-left: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 4rem;
`;

export default Recipe