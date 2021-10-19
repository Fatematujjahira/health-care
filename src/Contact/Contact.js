import React from 'react';
import Slide from 'react-reveal/Slide';
import Bounce from "react-reveal/Bounce";
import { Button, Form, Row, Col } from 'react-bootstrap';
import './Contact.css'
const Contact = () => {
    return (
        <div className="container">
        <div className="about-section">
          <h1><i class="far fa-address-book"></i> Connect With Us</h1>
        <div className="row">
          <div className="col-md-6">
          
             <div className="about-image">
             <Slide left>
              <img className="submit-img w-100 mt-5 pt-5 m-2" src="http://asianitbd.com/wp/hopemedical/wp-content/uploads/2016/10/image-forlift.png" alt="" />
              </Slide>
            </div>
            
          </div>
          <div className="col-md-6">
            <div className="about-right-section text-start p-4 mt-5 ">
              <Bounce right >
    <Form className="mt-4">
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
    </div>
    );
};

export default Contact;