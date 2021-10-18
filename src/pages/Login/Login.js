import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <div className="text-center my-4">
        <h2>PLEASE LOGIN</h2>
        <p className=" mt-2">Login with Email && Password</p>
       
        <div className="w-25 mx-auto">
          <Form>
            <Row>
              <Col className="text-start">
                <Form.Label htmlFor="email" visuallyHidden>
                  Your Email Address
                </Form.Label>
                <InputGroup className="mb-2">
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                  </InputGroup.Text>
                  <FormControl
                    
                    type="email"
                    autoComplete="current-email"
                    id="email"
                    placeholder="Enter your email address"
                  />
                </InputGroup>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col className="text-start">
                <Form.Label htmlFor="password" visuallyHidden>
                  Your Password
                </Form.Label>
                <InputGroup className="mb-2">
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
                  </InputGroup.Text>
                  <FormControl
                    
                    type="password"
                    autoComplete="current-password"
                    id="password"
                    placeholder="Enter your password"
                  />
                </InputGroup>
              </Col>
            </Row>
  
            <button type="submit" className="btn btn-primary mt-2 w-100">
              Login
            </button>
          </Form>
        </div>
        <p className="mt-2">
          <NavLink className="text-decoration-none text-danger" to="/register">
            Please Sign up!
          </NavLink>
            </p>
        </div>    

    );
};

export default Login;