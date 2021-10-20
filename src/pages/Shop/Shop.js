import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import img from '../../assets/images/image_processing20200317-9232-147l0fa.gif';
import img1 from '../../assets/images/eHospital (1).gif';
import img2 from '../../assets/images/health-management.gif';
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import './shop.css';
import { NavLink } from 'react-router-dom';
const Shop = () => {
    return (

        

            

            <div className="container overflow-hidden ">
        <div className="about-section mb-5">
        <Bounce left cascade >
            <h1 className="mt-5">UPDATE LATEST NEWS</h1>
            <hr className="w-75 mx-auto" />
         </Bounce>
        <div className="row">
        <div className="col-md-9 col-sm-12">
          
             <div className="about-image">
             <Slide left>
              <img className="w-100 mt-2 pt-5 m-1" src="https://health.templines.org/wp-content/uploads/2017/02/34.jpg" alt="" />
              </Slide>
              </div>
            
          </div>
          <div className="col-md-3 col-sm-12">
              <div className="about-right-section text-start p-4">
              <Bounce right>
              <h1 className="mt-2"><span className="display-6">Product </span>
                <span className="text-dark fw-bold display-5">Categuries </span>
                </h1>
             <div className=" list text-white mt-5">
         <li className="text-info"><i className="fas fa-arrow-circle-right"></i> Uncategorized</li>
         <li className="text-info"><i className="fas fa-arrow-circle-right"></i>Cancer Oncology</li>
         <li className="text-info"><i className="fas fa-arrow-circle-right"></i> Dental Surgery</li>
         <li className="text-info"><i className="fas fa-arrow-circle-right"></i> Drug / Medicine</li>
         
         </div>
              </Bounce>
              </div>
              
            </div>
            </div>
        <div className="row">
        <div className="col-md-9 col-sm-12">
          
             <div className="about-image">
             <Slide left>
              <img className="w-100 mt-2 pt-5 m-1" src="https://health.templines.org/wp-content/uploads/2017/02/24.jpg" alt="" />
              </Slide>
              </div>
            
          </div>
          <div className="col-md-3 col-sm-12">
              <div className="about-right-section text-start p-4">
              <Bounce right>
              <h1 className="mt-2"><span className="display-6">top rated  </span>
                <span className="text-dark fw-bold display-5">products</span>
                </h1>
             <div className=" list text-white mt-5">
         <li className="text-warning"><i className="fas fa-arrow-circle-right"></i> PRAESENT VESTIBULUM DAPIBUS NIBH</li>
         <li className="text-warning"><i className="fas fa-arrow-circle-right"></i> PRAESENT PORTTITOR NULLA</li>
         <li className="text-warning"><i className="fas fa-arrow-circle-right"></i> ETIAM UT PURUS MATTIS MAURIS</li>
         <li className="text-warning"><i className="fas fa-arrow-circle-right"></i> ETIAM UT PURUS MATTIS MAURIS</li>
        
         
         </div>
              </Bounce>
              </div>
              
            </div>
            </div>
            </div>
           
 
            
            <Bounce left cascade >
            <h1 className="mt-5">EMERGENCY SERVICE CENTER</h1>
            <hr className="w-75 mx-auto" />
         </Bounce>
            
        <Row xs={1} md={3} className="g-4">
       
          <Col>
            <Card className="cart">
                    <Card.Img className="latest" variant="top" src={ img }/>
              <Card.Body>
                <Card.Title>Cancer treatment for poor peoples</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit longer.
                  <div className=" d-flex justify-content-center ">      
                    
                <Bounce>
                <NavLink 
                  to="/about"
                  className=" button btn btn-outline-primary  fs-5 py-2 px-4"
                >
                  Read More
                </NavLink>
                </Bounce>
                </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        
          <Col>
            <Card className="cart">
                    <Card.Img className="latest" variant="top" src={ img1 }/>
              <Card.Body>
                <Card.Title>Disease based on junk foods
                </Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit longer.
                   <div className=" d-flex justify-content-center ">      
                    
                <Bounce>
                <NavLink 
                  to="/about"
                  className=" button btn btn-outline-primary  fs-5 py-2 px-4"
                >
                  Read More
                </NavLink>
                </Bounce>
                </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        
          <Col>
            <Card className="cart">
                    <Card.Img className="latest" variant="top" src={ img2 }/>
              <Card.Body>
                <Card.Title>Cancer treatment for poor peoples</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                 lead-in to additional content. This content is a little bit longer.
                  <div className=" d-flex justify-content-center ">      
                    
                    <Bounce>
                    <NavLink 
                      to="/about"
                      className=" button btn btn-outline-primary  fs-5 py-2 px-4"
                    >
                      Read More
                    </NavLink>
                    </Bounce>
                    </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        
            </Row>
            </div>
        
    );
};

export default Shop;