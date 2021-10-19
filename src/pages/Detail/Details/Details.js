// import React, { useEffect, useState } from 'react';
import { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
const Details = () =>
{
    const [services,setServices] = useState([])
    const { serviceId } = useParams();
    useEffect(() =>
    {
        fetch('https://raw.githubusercontent.com/Fatematujjahira/fakedata/main/service.json')
            .then(res => res.json())
        .then(data=>setServices(data) )
         },[])
   
 const selected = services.find(service => service.id === serviceId )
    
    return (
        <div className="">

            {/* <h1>{ selected?.name }</h1> */ }
            <Card className="mx-auto" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={ selected?.img } />
  <Card.Body>
    <Card.Title>{ selected?.name }</Card.Title>
    <Card.Text>
    { selected?.discription }
    </Card.Text>
    <Link to='/service'>
     <button className="btn btn-outline-primary px-5 m-3">{ selected?.name }</button>
    
                </Link>
  </Card.Body>
</Card>
             
        </div>
    );
};

export default Details;