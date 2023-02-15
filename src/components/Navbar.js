import React from "react";
import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { useShoppingCart } from "../context/ShoppingCartContext";

const Navbar = () => {
  const {openCart,cartQuantity} = useShoppingCart()
  return (
    <NavbarBs sticky="top" className="shadow-sm mb-4 bg-white">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button
          onClick={openCart}
          variant="outline-primary"
          className="rounded-circle"
          style={{ width: "3rm", height: "3rm", position: "relative" }}
        >
          <HiOutlineShoppingCart style={{transform:"scale(1.2)"}}/>
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              width: "1.5rem",
              height: "1.5rem",
              color: "#fff",
              position: "absolute",
              right: "-10px",
              bottom: "-5px",
            }}
          >
            {cartQuantity}
          </div>
        </Button>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
