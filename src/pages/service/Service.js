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
             <div className="cart m-3">
             
             <div className="cart-details">   
             <img className="serviceimg w-100  img-fluid" src={img} alt="" /> 
             </div>
             <div className="text-area">
              <h3 className=" name fw-bold text-info p-2">{name}</h3><hr className="mx-auto fw-bold w-75 "/>
             
              <p>{discription}</p>
            <Link to={`/details/${id}`}>
              <button className="btn btn-outline-primary px-5 m-3">{name}</button>
    
                </Link>
                </div>
               
          </div>
        </div>
        
        </Zoom>
     
    
   
    
    );
};

export default Service;