import React from "react";

// Styling via Styled Components
import styled from "styled-components";

// Assets
import logo from "../img/Logo.png";
import footer from "../img/Footer.png";

export default function Footer() {
  return (
    <StyledFooter>
      <div className="footer-contact">
        <img src={logo} alt="woodies logo" />
        <h5>(012) 8967453</h5>
        <a href="mailto:woodies@gmail.com">woodies@gmail.com</a>
        <h5>Jakarta, Indonesia</h5>
      </div>
      <div className="footer-copyright">
        <h5>© 2020 WOODIES</h5>
      </div>
      <img src={footer} alt="minimalist table white" />
      <div className="divider-line"></div>
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 20vh;
  width: 100%;
  margin-top: 2rem;
  padding: 5rem 0 0 5rem;
  background-color: #f1f1f1;
  h5,
  a {
    font-size: 0.8rem;
    font-weight: 400;
    text-decoration: none;
    color: #8d8d8d;
  }
  .footer-contact {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    gap: 1rem;
  }
  .footer-copyright {
    transform: translateY(8rem);
  }
  img {
    margin: 0;
    padding: 0;
  }
  .divider-line {
    position: absolute;
    top: 20%;
    height: 0.12rem;
    width: 55%;
    background-color: #c4c4c4;
  }
`;
