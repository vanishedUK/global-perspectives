import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";

export const Header = () => {
  return (
    <Navbar sticky="top" bg="dark" variant="dark" className="mb-4">
      <Container>
        <Navbar.Brand href="/">Global Perspectives</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Categories" id="navbar-dropdown">
              <NavDropdown.Item href="/category/world">World</NavDropdown.Item>
              <NavDropdown.Item href="/category/technology">
                Technology
              </NavDropdown.Item>
              <NavDropdown.Item href="/category/science">
                Science
              </NavDropdown.Item>
              <NavDropdown.Item href="/category/health">
                Health
              </NavDropdown.Item>
              <NavDropdown.Item href="/category/business">
                Business
              </NavDropdown.Item>
              <NavDropdown.Item href="/category/entertainment">
                Entertainment
              </NavDropdown.Item>
              <NavDropdown.Item href="/category/sports">
                Sports
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
