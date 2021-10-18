import React, { useEffect, useState } from 'react';
import Service from '../service/Service';

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
        <div className="container">
            
            <div className="row">
            {
                services.map(service => <Service
                    key={ Service.id }
                     service={service}
                ></Service>)
            }
            </div>
    
       </div>
    );
};

export default Services;