import React from 'react';
// import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import './service.css'
const Service = ({ service }) =>
{
    const {name,discription, img } = service;
    return (

          <div className="col-md-6 col-lg-4 col-sm-12">
          <div className="cart m-2 p-2">
            <div className="cart-details">
              <img className="serviceimg w-100  img-fluid" src={img} alt="" />
            </div>
            <div className="text-area">
              
              <p>{name}</p>
             
              <p>{discription}</p>
             
                <button className="btn btn-success">Details</button>
          
            </div>
          </div>
        </div>
      
     
    
   
    
    );
};

export default Service;