import React from "react";
// Components
import Categorie from "../Components/Categorie";

// Styling via Styled Components
import styled from "styled-components";

// Assets
import logosimple from "../img/logo-simple.png";
import jensonImage from "../img/Tisch.png";
import deonImage from "../img/Stuhl.png";
import krishaImage from "../img/Schuesseln.png";

export default function Products() {
  return (
    <>
      <MainContainer>
        <StyledCategoriesHeadline>
          <div className="categories-headline">
            <div className="categories-headline-logo">
              <img src={logosimple} alt="" />
              <h2>What we have</h2>
            </div>
            <div className="divider"></div>
            <h3>PRODUCTS</h3>
          </div>
        </StyledCategoriesHeadline>
        <StyledCategories>
          <Categorie title="Jenson" image={jensonImage} />
          <Categorie title="Deon" image={deonImage} />
          <Categorie title="Krisha" image={krishaImage} />
        </StyledCategories>
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  height: 88vh;
  width: 100%;
  padding: 1.5rem 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledCategoriesHeadline = styled.div`
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

const StyledCategories = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 3rem;
`;
