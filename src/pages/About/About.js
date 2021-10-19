import React from 'react';
import './about.css';
import Slide from 'react-reveal/Slide';
import Bounce from "react-reveal/Bounce";
import img from '../../assets/images/banner2 (1).jpg'
import img1 from '../../assets/doctor/austin-distel-7bMdiIqz_J4-unsplash.jpg'

import img3 from '../../assets/doctor/img2.jpg'
import img4 from '../../assets/doctor/engin-akyurt-YmM4EkZ1_v8-unsplash.jpg'
import img5 from '../../assets/doctor/humberto-chavez-FVh_yqLR9eA-unsplash.jpg'

import img7 from '../../assets/images/banner2 (2).jpg';

const About = () => {
    return (
        <div className="container ">
        <div className="about-section mb-5">
        <Bounce left cascade >
            <h1 >ABOUT OUR AGENCY</h1>
            <hr className="w-50 mx-auto" />
         </Bounce>
        <div className="row">
        <div className="col-md-7">
          
             <div className="about-image">
             <Slide left>
              <img className="w-100 mt-5 pt-5 m-2" src="https://images.pexels.com/photos/3946832/pexels-photo-3946832.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
              </Slide>
              </div>
            
          </div>
          <div className="col-md-5 col-sm-12">
              <div className="about-right-section text-start p-4">
              <Bounce right>
              <h1 className="mt-5"><span className="display-6">We Offer</span> <br />
                <span className="text-dark fw-bold display-5">Fast & Reliable</span> <br />
                <span className="text-info  ">Medical & HealthCare</span> <br />
                <span className="text-info">
                Solutions to Our Patients</span></h1>
              <p>
                Pair large text with an image to give focus to your chosen
                product, collection, or blog post. Add details on availability,
                style, or even provide a review. Even if you can't afford to
                travel the world, you can take your children to the museum, zoo
                or local park. And don't be afraid to take them to grown-up
                spots. Eating out in a restaurant teaches children how to be
                quiet and polite and gives them the pleasure of knowing you
                trust them to behave.
              </p>
              </Bounce>
              </div>
              
            </div>
            </div>
        </div>
       
        <div className="second mt-5 ">
        <Slide right cascade>
           <h2 className="display-5 ">Welcome to <span className="display-6 fw-bold text-info">HEALTHCARE AGENCY</span></h2>
           </Slide>
           <h2 className="mt-5">MEET OUR<span className=" fw-bold text-info"> EXPERIENCED </span>DOCTOR</h2>
           <h6>WE ARE EXPERTS IN OUR FIELD</h6>
          <hr className="w-50 mx-auto" />
          
          <div class="row row-cols-1 row-cols-md-3 g-4 mt-4 mb-5">
            <div class="col">
           
       <div class="card h-100">
         
           <img src={img} class="card-img-top" alt="..."/>
           <h3 className="bg-info text-white">Dr.Farin</h3>
       </div>
   
       </div>
       <div class="col">
       <div class="card h-100">
           <img src={img1} class="card-img-top" alt="..."/>
           <h3 className=" bg-info text-white">Dr. Oliver</h3>
       </div>
       </div>
       <div class="col">
       <div class="card h-100">
          <img src={img3} class="card-img-top" alt="..."/>
          <h3 className=" bg-info text-white">Dr. diana</h3>
      </div>
      </div>
      </div>
          <h2 className="mt-5"><span className=" fw-bold text-info"> CARDILOGY </span>SPESIALIST</h2>
          <hr className="w-50 mx-auto" />
       <div class="row row-cols-1 row-cols-md-3 g-4 mt-4">
       <div class="col">
       <div class="card h-100">  
         <img src={img4} class="card-img-top" alt="..."/>
         <h3 className=" bg-info text-white">Dr. Jeswa</h3>
         </div>
         </div>
      <div class="col">
      <div class="card h-100">
         <img src={img5} class="card-img-top" alt="..."/>
         <h3 className=" bg-info text-white">Dr. Nastya</h3>
     </div>
     </div>
     <div class="col">
     <div class="card h-100">
      <img src={img7} class="card-img-top" alt="..."/>
      <h3 className=" bg-info text-white">Dr. Gaby</h3>
      </div>
      </div>
  
    </div>
    
    </div>
    
  </div>

       
     

           
    
      
      
     
    );
};

export default About;