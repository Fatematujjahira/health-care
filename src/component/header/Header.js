import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.jpg'
import useAuth from '../../hooks/useAuth';
// import { HashLink } from "react-router-hash-link";
import './Header.css'
const Header = () => {
   
const { AllContexts } = useAuth();
const { user, logOut } = AllContexts;
const { displayName, photoURL, email } = user;
return (

    <>
    <Navbar expand="lg" className="bg-primary">
    <Container>
      <Navbar.Brand as={NavLink}        className="text-white" to="/home">
        <img width="50px" 
         src={logo} alt="Logo" />{" "} 
        <span className="title"> HEALTH CARE</span>
      </Navbar.Brand>
      <Navbar.Toggle        aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto align-items-center">
          <Nav.Link as={NavLink} to="/home" className="nav-item text-white fw-bold">
            Home
          </Nav.Link>

          <Nav.Link as={NavLink} to="/about" className="nav-item text-white fw-bold">
            About
          </Nav.Link>
          <Nav.Link as={NavLink} to="/shop" className="nav-item text-white fw-bold">
            About
          </Nav.Link>

          <Nav.Link as={NavLink} to="/contact" className="nav-item text-white fw-bold">
            Contact
          </Nav.Link>
          <Nav.Link as={NavLink} to="/service" className="nav-item text-white fw-bold">
            Service
          </Nav.Link>
          

          {!displayName ? (
            <>
              <Nav.Link as={NavLink} to="/signup" className="nav-item text-white fw-bold">
                Sign Up
              </Nav.Link>

              <Nav.Link className="nav-item text-white fw-bold" as={NavLink} to="/login">
                Log in
              </Nav.Link>
            </>
          ) : (
            <NavDropdown
              title={
                    <img
                    style={{
                    width: "45px",
                    borderRadius: "50%",
                  }}
                    src={photoURL}
                    alt=""
                />
              }
            >
              <div className="text-center">
                <h6>{displayName}</h6>
                <p className="m-0 mb-2">{email}</p>
                <button onClick={logOut} className="button-logout">
                  Sign Out
                </button>
              </div>
            </NavDropdown>
          )}
        </Nav>
        </Navbar.Collapse>
       </Container>
       </Navbar>
 </>
       

    );
};

export default Header;