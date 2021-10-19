import React from 'react';
import Slide from 'react-reveal/Slide';
import Bounce from "react-reveal/Bounce";
import { Button, Form, Row, Col } from 'react-bootstrap';
import './Contact.css'
const Contact = () => {
    return (
        <div className="container">
        <div className="contact-section">
          <h1><i className="far fa-address-book"></i> Connect With Us</h1>

        <div className="row">
        <div className="col-md-6">
          
        <div className="about-image">
              <Slide left>
              <img className="submit-img w-100 mt-4 pt-4 m-2" src="http://asianitbd.com/wp/hopemedical/wp-content/uploads/2016/10/image-forlift.png" alt="" />
              </Slide>
        </div>
            
        </div>
            <div className="col-md-6 col-sm-12">
              <h1 className="display-5">Drop<span className="display-5 fw-bold text-info">  us a Message </span></h1>
              <h4>We’d Love To Hear From You</h4>
             
        <div className="about-right-section text-start p-2 mt-4">
              <Bounce right >
    <Form className="mt-3">
    <Row>
      <Col>
      <Form.Control placeholder="First name" />
      </Col>
      <Col>
      <Form.Control placeholder="Last name" />
      </Col>
   </Row>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
              </Bounce>
            </div>
          </div>
        </div>
        </div>
     <div className="service-section mt-5">
    
    <div className="row">
      <div className="col-md-6 col-sm-12">
      <div className="about-right-section text-start p-3 ">
          <Bounce right>
          <h4 className=""><span className="display-6 text-white">Why Choose</span>
            <span className="text-info display-5 fw-bold"> Us,</span> <br />
           </h4>
           <h2 className="text-white">The Reasons That You Should Contact Us:</h2>
        <div className="d-flex ">
           <div className="">
           <ol className="text-white">
         <li><h4 className="text-info">Over 20 years of experience.</h4>
         <p>Nunc fringilla eros vitae nisl posuere, ut consectetur</p>
         </li>
         <li><h4 className="text-info">We have experienced Doctor's.</h4>
         <p>Quisque ac orci ante. Proin sit amet turpis lobortis, </p>
         </li>
         <li><h4 className="text-info">We are improving everyday.</h4>
         <p>ut mauris vitae tortor sodales efficitur.</p>
         </li>
       
         </ol>
           </div>
           </div>
           </Bounce>
           </div>
          
           </div>
           
           <div className="col-md-5 col-sm-12">
          
          
           </div>
           </div>
           
        </div>
         
    </div>
    );
};

export default Contact;