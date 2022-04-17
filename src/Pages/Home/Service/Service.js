import React from 'react';
import './service.css'


const Service = ({ service }) => {
    const { name, price, description, img } = service;
    return (
        <div className='service'>
            <img src={img} width='400px' alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <p>Price:${price}</p>
            <button>Book Now</button>
        </div>
    );
};

export default Service;