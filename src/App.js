import React from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Store from "./components/Store";
import ShoppingCartProvider from "./context/ShoppingCartContext";
const App = () => {
  return (
      <ShoppingCartProvider>
        <Navbar />
        <Container className="mb-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Container>
      </ShoppingCartProvider>
  );
};

export default App;
