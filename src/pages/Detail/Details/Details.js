// import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
const Details = () =>
{
    const { serviceId } = useParams();

   
  
    return (
        <div>
            <h1>details:{ serviceId }</h1>
           
        </div>
    );
};

export default Details;