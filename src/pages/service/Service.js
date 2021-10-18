import React from 'react';
// import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import './service.css'
import Zoom from "react-reveal/Zoom";
import { Link } from 'react-router-dom';
const Service = ({ service }) =>
{
    const {id, name,discription, img } = service;
    return (

        <Zoom> 
          <div className="col-md-6 col-lg-4 col-sm-12">
            <div className="cart m-2 p-2">
             
                <div className="cart-details">
                 
            <img className="serviceimg w-100  img-fluid" src={img} alt="" />
               
            </div>
            <div className="text-area">
              
              <p>{name}</p>
             
              <p>{discription}</p>
                    <Link to={`/details/${id}`}>
                        <button className="btn btn-outline-primary px-5">{name}</button>
    
                        </Link>
                </div>
               
          </div>
        </div>
        </Zoom>
     
    
   
    
    );
};

export default Service;