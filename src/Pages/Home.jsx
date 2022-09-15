import React from "react";

// React Router Dom
import { Link } from "react-router-dom";

// Styling via Styled Components
import styled from "styled-components";

// Assets
import table from "../img/Home.png";

export default function Home() {
  return (
    <StyledHomepage>
      <div className="homepage-text">
        <h1>
          Are you looking for <span>woodden furniture</span> for your place?
        </h1>
        <h2>
          This is the <span>Right Place</span>
        </h2>
        <Link className="homepage-link" to="/categories">
          Explore Categories
        </Link>
      </div>
      <div className="homepage-image">
        <img src={table} alt="TABLE" />
      </div>
      <div className="background-color"></div>
    </StyledHomepage>
  );
}

const StyledHomepage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5rem;
  height: 94vh;
  width: 100vw;
  .homepage-text {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 2rem;
    height: 100%;
    width: 50vw;
    span {
      color: #3e3f43;
    }
    h1 {
      font-size: 2.25rem;
      font-weight: 400;
      color: #3e3f43;
      width: 70%;
      span {
        font-weight: 700;
      }
    }
    h2 {
      font-size: 4.5rem;
      font-weight: 400;
      color: #313235;
      span {
        display: block;
      }
    }
    .homepage-link {
      font-size: 1rem;
      font-weight: 700;
      text-decoration: none;
      width: fit-content;
      color: #fff;
      background-color: #daa520;
      padding: 0.8rem 1.25rem;
      border-radius: 0.25rem;
    }
  }
  .homepage-image {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    height: 100%;
    width: 50vw;
  }
  .background-color {
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    height: 100vh;
    width: 30vw;
    background-color: pink;
  }
`;
