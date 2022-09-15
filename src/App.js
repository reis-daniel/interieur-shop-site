import React from "react";

// Components
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// Pages
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import About from "./Pages/About";
import CategorieDetail from "./Pages/CategorieDetail";

// React Router Dom
import { Routes, Route, useLocation } from "react-router-dom";

// Styling
import GlobalStyle from "./Components/GlobalStyle";

function App() {
  // Get access to current URL
  const url = useLocation();
  const currentUrl = url.pathname;
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      {/* Routes for the Page */}
      <Routes>
        {/* Every possible Route */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<CategorieDetail />} />
      </Routes>
      {currentUrl === "/" ? null : <Footer />}
    </div>
  );
}

export default App;
