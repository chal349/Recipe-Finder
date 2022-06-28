import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";


function Veggie() {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {

    const check = localStorage.getItem('veggie');

    if(check){
      setVeggie(JSON.parse(check));
    }else{
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=./recipe_app/env/${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
      );
      const data = await api.json();

      localStorage.setItem('veggie', JSON.stringify(data.recipes));
      setVeggie(data.recipes);
    }
  };

  return (
    <div>
          <Wrapper>
            <h3>Our Vegetarian Picks</h3>

            <Splide options={{
              perPage: 3,
              breakpoints: {
                1201: {
                  perPage: 2,
                },
                768: {
                  perPage: 1,
                },
              },
              arrows: false,
              pagination: false,
              drag: 'free',
              gap: '3rem',
              

            }}
            >
              {veggie.map((recipe) => {
                return (
                  <SplideSlide key={recipe.id}>
                    <Link to={"/recipe/" + recipe.id}>
                      <Card>
                        <p>{recipe.title}</p>
                        <img src={recipe.image} alt={recipe.title} />
                        <Gradient />
                      </Card>
                    </Link>                  
                  </SplideSlide>
                );
              })}
            </Splide>
          </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  margin: 1.5rem 0rem;
  
  
`;

const Card = styled.div`
  
  height: 16rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  box-shadow: 0px 0px 9px rgba(0,0,0,0.1);

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p{
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    text-shadow: 0px 3px 15px rgba(0,0,0,0.8);
    width: 90%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
`;

export default Veggie