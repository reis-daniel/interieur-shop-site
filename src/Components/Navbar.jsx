import React from "react";
// React Router Dom
import { Link } from "react-router-dom";

// Styling via Styled Components
import styled from "styled-components";

// Assets
import logo from "../img/Logo.png";

export default function Navbar() {
  return (
    <StyledNavbar>
      <Link to="/">
        <img src={logo} alt="WOODIES LOGO" />
      </Link>
      {/* Linkes to change URL */}
      <ul className="navbar-links">
        <Link to="/" className="navbar-link">
          Home
        </Link>
        <Link to="/about" className="navbar-link">
          About Us
        </Link>
        <Link to="/products" className="navbar-link">
          Products
        </Link>
      </ul>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.nav`
  height: 6vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 5rem;
  .navbar-links {
    display: flex;
    gap: 5rem;
    .navbar-link {
      color: rgba(34, 34, 34, 0.75);
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5rem;
      text-decoration: none;
      &:hover {
        color: rgba(34, 34, 34, 0.92);
        text-decoration: underline rgba(34, 34, 34, 0.85) 0.15rem;
      }
    }
  }
`;
