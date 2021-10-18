import React from 'react';
import { useParams } from 'react-router';
const Details = () =>
{
    const { serviceId } = useParams();
    return (
        <div>
            <h1>details janba amr:{ serviceId }</h1>
        </div>
    );
};

export default Details;