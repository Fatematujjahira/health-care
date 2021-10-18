import React from 'react';
import img from '../../assets/doctor/img.jpg'
import img1 from '../../assets/images/banner2 (1).jpg'
import img3 from '../../assets/doctor/img3.jpg'
import { Carousel} from "react-bootstrap";
import Bounce from "react-reveal/Bounce";

import { NavLink } from "react-router-dom";
import './Banner.css';
const Banner = () => {
    return (
        <div>


<Carousel>
  <Carousel.Item className="slider" interval={2000}>
     
     <img
      className="d-block w-100 h-100"
      src={img}
      alt="First slide"
    />    
 
    <Carousel.Caption>
              <Bounce left cascade>
              <h3 className="text-info display-5 ">We always put the patients first</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
     </Bounce>
      <div className=" d-flex justify-content-center ">      
                <Bounce>
                <NavLink
                  to="/services"
                  className=" button btn btn-primary fs-5 py-2 px-4"
                >
                  View Details
                </NavLink>
              </Bounce>
              <Bounce>
                <NavLink 
                  to="/about"
                  className=" button btn btn-outline-primary  fs-5 py-2 px-4"
                >
                  Read more
                </NavLink>
              </Bounce>
            </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="slider" interval={2000}>
    <img
      className="d-block w-100 h-100"
      src={img1}
      alt="Second slide"
    />
    <Carousel.Caption>
    <Bounce left cascade>
              <h3>To take care of your health</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
     </Bounce>
      <div className=" d-flex justify-content-center ">      
                <Bounce>
                <NavLink
                  to="/services"
                  className=" button btn btn-primary fs-5 py-2 px-4"
                >
                  View Details
                </NavLink>
              </Bounce>
              <Bounce>
                <NavLink 
                  to="/about"
                  className=" button btn btn-outline-primary  fs-5 py-2 px-4"
                >
                  Read More
                </NavLink>
              </Bounce>
            </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="slider">
    <img
      className="d-block w-100 h-100"
      src={img3}
      alt="Third slide"
    />
    <Carousel.Caption>
    <Bounce left cascade>
              <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
     </Bounce>
      <div className=" d-flex justify-content-center ">      
                <Bounce>
                <NavLink
                  to="/services"
                  className=" button btn btn-primary fs-5 py-2 px-4"
                >
                  View Details
                </NavLink>
              </Bounce>
              <Bounce>
                <NavLink 
                  to="/about"
                  className=" button btn btn-outline-primary  fs-5 py-2 px-4"
                >
                  Read More
                </NavLink>
              </Bounce>
            </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;