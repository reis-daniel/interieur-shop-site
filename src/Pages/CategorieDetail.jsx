import React from "react";
import { useParams } from "react-router-dom";

// Styling via Styled Components
import styled from "styled-components";

// Assets
import logosimple from "../img/logo-simple.png";
import jensonImage from "../img/Tisch.png";
import deonImage from "../img/Stuhl.png";
import krishaImage from "../img/Schuesseln.png";

export default function CategorieDetail() {
  // Get access to the id of the Route
  const params = useParams();
  const categorieText = {
    Jenson:
      "Jenson demonstrates what designer Tim Fenby does best. Clean lines, subtle curves and an oak finish nail this season's trends. Boomerang legs add serious style points – not that this dining table needs it. Nordic retro? You got it.",
    Deon: "Jenson demonstrates what designer Tim Fenby does best. Clean lines, subtle curves and an oak finish nail this season's trends. Boomerang legs add serious style points – not that this dining table needs it. Nordic retro? You got it.",
    Krisha:
      "Jenson demonstrates what designer Tim Fenby does best. Clean lines, subtle curves and an oak finish nail this season's trends. Boomerang legs add serious style points – not that this dining table needs it. Nordic retro? You got it.",
  };

  return (
    <>
      <StyledMainContainer>
        <StyledHeadline>
          <div className="categories-headline">
            <div className="categories-headline-logo">
              <img src={logosimple} alt="" />
              <h2>{params.id}</h2>
            </div>
            <div className="divider"></div>
            <h3>PRODUCTS</h3>
          </div>
        </StyledHeadline>
        <StyledCategorieDetail>
          <img
            src={
              params.id === "Jenson"
                ? jensonImage
                : params.id === "Deon"
                ? deonImage
                : params.id === "Krisha"
                ? krishaImage
                : ""
            }
            alt={params.id}
          />
          <p>
            {params.id === "Jenson"
              ? categorieText.Jenson
              : params.id === "Deon"
              ? categorieText.Deon
              : params.id === "Krisha"
              ? categorieText.Krisha
              : "What"}
          </p>
        </StyledCategorieDetail>
      </StyledMainContainer>
    </>
  );
}

const StyledMainContainer = styled.div`
  height: 88vh;
  width: 100%;
  padding: 1.5rem 5rem;
`;

const StyledHeadline = styled.div`
  display: flex;
  margin: 3rem 0;
  width: 100%;
  .categories-headline {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    .categories-headline-logo {
      display: flex;
      align-items: center;
      gap: 1rem;
      h2 {
        font-size: 2.5rem;
        font-weight: 700;
      }
    }
    h3 {
      font-weight: 800;
      font-size: 4.5rem;
      color: rgba(34, 34, 34, 0.1);
    }
    .divider {
      background-color: #6f6f6f;
      min-width: 50%;
      height: 0.12rem;
    }
  }
`;

const StyledCategorieDetail = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 4rem;
  img {
    height: 50vh;
    width: auto;
    object-fit: cover;
  }
  p {
    font-weight: 600;
    font-size: 1.5rem;
    width: 30vw;
  }
`;
