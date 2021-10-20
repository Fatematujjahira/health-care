import React, { useEffect, useState } from 'react';
import Service from '../service/Service';
import './services.css';

import Bounce from "react-reveal/Bounce";

const Services = () =>
{
    const [ services, setServices ] = useState([]);
    useEffect(() =>
    {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    
    return (
        <div className="overflow-hidden">
            {/* <div className="services-img">
            <div className="col col-sm-12">
            <div className="about-right-section mx-auto p-4">
              <Bounce right>
              <h1 className=""><span className="display-6 text-white">We Offer </span>
                <span className="text-white fw-bold display-4">Fast & Reliable</span><br />
                <span className="text-info  ">Medical & HealthCare </span> 
                <span className="text-white">
                Solutions to Our Patients</span></h1>
                        </Bounce>
                        <div className=" d-flex justify-content-center ">      
                <Bounce>
                <NavLink
                  to="/contact"
                  className=" button btn btn-primary fs-5 py-2 px-4"
                >
                  Book An Appointment
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
              </div>
              </div>
            </div> */}
            <div className="container ">
               
           
            <div className="container mt-5">
            <h2>WE CARE ABOUT<span className=" fw-bold text-info "> PATIENT</span></h2>
                <h1>OUR SERVICE</h1>
            <div className="row">
            {
                services.map(service => <Service
                    key={ Service.id }
                     service={service}
                ></Service>)
            }
            </div>
            </div>
            </div>
     <div className="container">
     <div className="service-section mt-5">
    
    <div className="row">
      <div className="col-md-6 col-sm-12">
      <div className="about-right-section text-start p-5 m-2">
          <Bounce right>

        <div className="d-flex ">
           <div className="">
           <h1 className="text-white">Frequently Asked Question</h1>
           <div className=" list text-white mt-5">
         <li className="text-info"><i className="fas fa-arrow-circle-right"></i> Can i request a copy of my mri online</li>
         <li className="text-info"><i className="fas fa-arrow-circle-right"></i> What if I do not have insurance?</li>
         <li className="text-info"><i className="fas fa-arrow-circle-right"></i> Can I make an appointment online?</li>
         <li className="text-info"><i className="fas fa-arrow-circle-right"></i> Where can I get the schedule of this agency?</li>
         
         </div>
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
        </div>
    );
};

export default Services;