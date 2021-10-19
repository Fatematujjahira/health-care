import React from 'react';
import About from '../About/About';
import Banner from '../banner/Banner';
// import Service from '../service/Service';
import Services from '../Services/Services';


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