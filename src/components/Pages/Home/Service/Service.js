import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceRow from './ServiceRow';

const Service = () => {
    const [services, setServices] = useState([])
    useEffect( () => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setServices(data)
        })
    } , [])
    return (
        <div className='md:px-52 pt-32 pb-16'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-24 pb-16'>
                <div>
                    <p className='text-green-500 font-bold text-xl'>MY SERVICES</p>
                    <h3 className='text-5xl font-bold text-white'>SERVICES AND <span className='text-green-500'>DESC.</span></h3>
                </div>
                <div className='border-l-4 border-green-500 flex items-center'>
                    <h3 className='pl-11 font-semibold text-white'>Lorem ipsum dolor sit smet, consectetur adipisicing elitae. Sint ratione reprehenderit, error qui enim and exsit.</h3>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                    services.map(service => <ServiceRow 
                        key={service._id}
                        service={service}
                        ></ServiceRow>)
                }
            </div>
            <div className='text-center mt-12'>
               <Link to='/allservices'><button className='bg-transparent border-2 border-green-500 hover:bg-green-500 duration-500 ease-in text-white font-semibold px-11 py-2 rounded-lg'>Show all</button></Link> 
            </div>
        </div>
    );
};

export default Service;