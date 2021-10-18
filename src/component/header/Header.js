import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.jpg'
const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Container>
  <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="40"
          height="40"
          className="d-inline-block align-top"
        />{' '}
      Healthcare Agency
      </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link as={NavLink} to="/home" className="text-white fw-bold">Home</Nav.Link>
      <Nav.Link as={NavLink} to="/services" className="text-white" >Services</Nav.Link>
      <Nav.Link as={NavLink} to="/about" className="text-white" >About</Nav.Link>
      <Nav.Link as={NavLink} to="/shop" className="text-white" >Shop</Nav.Link>
      <Nav.Link as={NavLink} to="/contact" className="text-white" >Contact</Nav.Link>
      <Nav.Link as={NavLink} to="/login" className="text-white" >Login</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;