import React from 'react';
import About from '../About/About';
import Banner from '../banner/Banner';
// import Service from '../service/Service';
import Services from '../Services/Services';
import Shop from '../Shop/Shop';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
          <Services></Services>
            <About></About>
            <Shop></Shop>
        </div>
    );
};

export default Home;