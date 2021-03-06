import React from 'react';
// import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import './service.css'
import Zoom from "react-reveal/Zoom";
import { Link } from 'react-router-dom';
const Service = ({ service }) =>
{
    const {id, name,discription, img, title } = service;
    return (

        <Zoom>
             <div className="col-md-6 col-lg-4 col-sm-12 overflow-hidden">
             <div className="cart m-3">
             
             <div className="cart-details">   
             <img className="serviceimg w-100  img-fluid" src={img} alt="" /> 
             </div>
             <div className="text-area">
              <h4 className=" name fw-bold text-info p-2">{name}</h4>
               <h5 className="fw-bold ">{title}</h5>
              
                 <p>{ discription }</p>
                 <div className="">
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
              <Link to={`/details/${id}`}>
              <button className="btn btn-outline-primary px-5 m-2">{name}</button>
      
                </Link>
                </div>
               
          </div>
        </div>
        
        </Zoom>
     
    
   
    
    );
};

export default Service;