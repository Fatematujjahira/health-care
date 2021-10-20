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
        <div className="mt-2">

            
            <Card className="mx-auto" style={{ width: '24rem' }}>
  <Card.Img variant="top" src={ selected?.img } />
  <Card.Body>
    <Card.Title>{ selected?.name }</Card.Title>
     <Card.Text>
    { selected?.discription }
    </Card.Text>
    <div className="">
      <div className="d-flex justify-content-center ">
     
     <div className="m-2 ">
      <h3><i className="fab fa-facebook-square icon text-primary"></i></h3>
      </div>
      <div className="m-2 ">
      <h3><i className="fab fa-instagram icon text-danger"></i></h3>
      </div>
      <div className="m-2">
      <h3><i className="fab fa-linkedin icon text-primary"></i></h3>
      </div>
      <div className="m-2">
      <h3><i className="fab fa-youtube text-danger icon  "></i></h3>
      </div>
      <div className="m-2">
      <h3><i className="fab fa-twitter icon text-primary"></i></h3>
      </div>
      </div>
     
     </div><hr />
    <Link to='/service'>
     <button className="btn btn-outline-primary px-5">{ selected?.name }</button>
    
    </Link>
  </Card.Body>
</Card>
             
        </div>
    );
};

export default Details;