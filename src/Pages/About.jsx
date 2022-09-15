import React from "react";

// Components
import Footer from "../Components/Footer";

// Styling via Styled Components
import styled from "styled-components";

// Assets
import about from "../img/About.png";
import logosimple from "../img/logo-simple.png";

export default function About() {
  return (
    <>
      <StyledAboutSection>
        <div className="about-headline">
          <div className="about-headline-logo">
            <img src={logosimple} alt="" />
            <h2>Who we are</h2>
          </div>
          <div className="divider"></div>
          <h3>ABOUT US</h3>
        </div>
        <div className="about-info">
          <img src={about} alt="" />
          <div className="about-info-text">
            <h3>
              WOODIES <span>is the</span> home of modern wooden furniture
            </h3>
            <p>
              the answer to your need for furniture with shapes, sizes and
              colors.
            </p>
          </div>
        </div>
      </StyledAboutSection>
    </>
  );
}

const StyledAboutSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding: 1.5rem 5rem;
  min-height: 94vh;
  h2,
  h3,
  p {
    color: #3e3f43;
  }
  .about-headline {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .about-headline-logo {
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
  .about-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p,
    h3 {
      width: 50%;
    }
    h3 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.5rem;
      font-weight: 600;
    }
    img {
      width: 40rem;
      height: auto;
    }
    .about-info-text {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-end;
    }
  }
`;
