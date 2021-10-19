import React from 'react';
import './NotFound.css';
import notFound from '../../assets/images/404-page.gif'
import { NavLink } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className="container">
            <div className="notFound">
                <img src={ notFound } alt="" />
              
      <div className=" d-flex justify-content-center ">      
            
                <NavLink
                  to="/home"
                  className=" button btn btn-primary fs-5 py-2 px-4"
                >
                  Go Back
                </NavLink>
             
                <NavLink 
                  to="/about"
                  className=" button btn btn-outline-primary  fs-5 py-2 px-4"
                >
                  Read More
                </NavLink>
            
            </div>
               
           </div>
        </div>
    );
};

export default NotFound;