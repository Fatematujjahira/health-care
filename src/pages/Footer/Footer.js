import { faMapMarkedAlt, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <div className="overflow-hidden">
      <div className="footer-container mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="left-container text-start">
                <h2><i className="fas fa-user-md"></i>HelthCare Agency</h2><br />
                  
                <p className="mt-4 ">
                  <small>
                    *These statements have not been evaluated by the Food and
                    Drug Administration.
                    
                  </small>
                  <small>
                    *These statements have not been evaluated by the Food and
                    Drug Administration.
                    
                  </small>
                </p>
       <div className=""><hr />
      <div className="d-flex justify-content-center ">
     
     <div className="m-2 ">
      <h3><i className="fab fa-facebook-square icon text-primary"></i></h3>
      </div>
      <div className="m-2 ">
      <h3><i className="fab fa-instagram icon text-danger"></i></h3>
      </div>
      <div className="m-2">
      <h3><i className="fab fa-linkedin icon text-primary"></i></h3>
      </div>
      <div className="m-2">
      <h3><i className="fab fa-youtube text-danger icon  "></i></h3>
      </div>
      <div className="m-2">
      <h3><i className="fab fa-twitter icon text-primary"></i></h3>
      </div>
      </div>
     
          </div>
              
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="footer-news-container">
                 <h3><i className="fas fa-user-edit"></i>Latest News & tips</h3> <hr />
                 <div className="news">
               <div className="">
             <h6>Cancer treatment for poor peoples</h6>
                <p>01th dec 2021</p>
                <hr />   
               </div>
               <div className=""> <h6>Disease based on junk foods</h6>
                <p>01th dec 2021</p>
                <hr /></div>
                <div className=""> <h6>Cancer treatment for poor peoples</h6>
                <p>01th dec 2021</p>
                </div>
                                    
                 </div>     

              </div>
              </div>
            <div className="col-md-2 col-sm-6">
             <div className="footer-menu-container">
                  <h2>Link</h2>
                 
              <Nav.Link as={NavLink} to="/home" className="nav-item text-white fw-bold">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/service" className="nav-item text-white fw-bold">
           our Services
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about" className="nav-item text-white fw-bold">
            About
          </Nav.Link>
          <Nav.Link as={NavLink} to="/shop" className="nav-item text-white fw-bold">
            News
          </Nav.Link>

          <Nav.Link as={NavLink} to="/contact" className="nav-item text-white fw-bold">
            Contact
          </Nav.Link>
                                

              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="right-footer-container">
                  <h4>Sign up for the next appointment</h4>
                  <hr />
                <input
                  className="footer-input"
                  type="text"
                  placeholder="Enter Email"
                />
                <div className="phone d-flex align-items-center justify-content-center mt-4">
                  <div className="foter-phone-icon text-success">
                    <FontAwesomeIcon icon={faPhoneVolume} />
                  </div>
                  <div>
                    <h5>+1 8 800 555 35 35</h5>
                  </div>
                </div>
                <div className="map d-flex align-items-center justify-content-center">
                  <div className="foter-phone-icon">
                    <FontAwesomeIcon icon={faMapMarkedAlt} />
                  </div>
                  <div>
                    <p>
                    Mirpur, Dhaka
                      <br />Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p>
          <small> ©fatemajahira All rights reserved.</small>
          </p>
        </div>
      </div>
    </div>
    
    );
};

export default Footer;