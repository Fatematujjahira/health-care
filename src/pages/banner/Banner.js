import React from 'react';
// import img from '../../assets/images/banner2 (2).jpg'
import { Container } from "react-bootstrap";
import Bounce from "react-reveal/Bounce";

import { NavLink } from "react-router-dom";
import './Banner.css';
const Banner = () => {
    return (
        <div>
            
            <div className="banner">
              
        <Container>
          <div
            style={{ height: "90vh" }}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="text-center my-5 py-5">
              <Bounce left cascade>
                <h1 className="title1 text-white ">To Take Care Of Your Health</h1>
              </Bounce>
              <Bounce right cascade>
              <h6 className="my-4 text-white fs-5">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nihil molestiae sapiente dignissimos optio accusamus modi cupiditate possimus fuga aliquam.
                </h6>
              </Bounce>

             
              <Bounce>
                <NavLink
                  to="/services"
                  className=" button rounded-pill btn btn-primary fs-5 py-2 px-4"
                >
                  View Details
                </NavLink>
              </Bounce>
            </div>
          </div>
        </Container>
      </div>
        </div>
    );
};

export default Banner;