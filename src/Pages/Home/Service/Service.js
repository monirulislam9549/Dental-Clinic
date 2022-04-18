import React from 'react';
import { useNavigate } from 'react-router-dom';
import './service.css'


const Service = ({ service }) => {
    const { id, name, price, description, img } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            <img src={img} width='400px' alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <p>Price:${price}</p>
            <button className='appoint-button' onClick={() => navigateToServiceDetail(id)}>Appointment Now</button>
        </div>
    );
};

export default Service;