import React from "react";

// Styling via Styled Components
import styled from "styled-components";

// React Router Dom
import { Link } from "react-router-dom";

export default function Categorie(props) {
  return (
    <StyledCategorie
      style={{
        backgroundImage: `url(${props.image})`,
      }}
    >
      <h3>{props.title}</h3>
      <Link className="show-now" to={"/products/" + props.title}>
        Show now
      </Link>
    </StyledCategorie>
  );
}

const StyledCategorie = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 2rem;
  width: 25vw;
  min-height: 50vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  h3 {
    margin-right: auto;
  }
  .show-now {
    font-size: 1rem;
    font-weight: 700;
    text-decoration: none;
    width: fit-content;
    color: #fff;
    background-color: #daa520;
    padding: 0.8rem 1.25rem;
    border-radius: 0.25rem;
  }
`;
