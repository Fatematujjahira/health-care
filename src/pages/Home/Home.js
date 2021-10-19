import React from 'react';
import About from '../About/About';
import Banner from '../banner/Banner';
import Services from '../Services/Services';
// import Service from '../service/Service';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
          <Services></Services>
           <About></About>
        </div>
    );
};

export default Home;